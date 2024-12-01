const dotenv = require('dotenv');
const axios = require('axios');
const fs = require('fs');

const loadEnvData = (key) => {
    try {
        if (process.env[key]) {
            return process.env[key];
        }

        if (fs.existsSync('.env')) {
            const envConfig = dotenv.parse(fs.readFileSync('.env'));

            if (envConfig[key]) {
                return envConfig[key];
            }
        }

        throw new Error(`Environment variable ${key} not found!`);
    } catch (e) {
        throw new Error(`Error loading environment variable ${key}: ${e.message}`);
    }
};

class YouTubeLambada {
    #makeApiRequest = async (path, params) => {
        params.key = loadEnvData('YOUTUBE_API_KEY');
        const url = `https://www.googleapis.com/youtube/v3/${path}`;

        const response = await axios.get(url, { params });

        return response.data;
    }

    #parseDuration = (duration) => {
        const pattern = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
        const matches = duration.match(pattern);

        const hours = matches[1] ? parseInt(matches[1]) : 0;
        const minutes = matches[2] ? parseInt(matches[2]) : 0;
        const seconds = matches[3] ? parseInt(matches[3]) : 0;

        return hours * 3600 + minutes * 60 + seconds;
    }

    getChannelId = async (handle) => {
        const response = await this.#makeApiRequest('channels', {
            part: 'id',
            forHandle: handle ?? loadEnvData('CHANNEL_HANDLE'),
        });

        return response.items?.[0]?.id ?? null;
    }

    getVideos = async (channelId) => {
        const videos = {
            normal: [],
            shorts: [],
            live: [],
        };

        let nextPageToken = null;

        do {
            const searchParams = {
                part: 'id,snippet',
                channelId: channelId,
                maxResults: 50,
                type: 'video',
                order: 'date',
            };

            if (nextPageToken) {
                searchParams.pageToken = nextPageToken;
            }

            const searchResponse = await this.#makeApiRequest('search', searchParams);

            if (! searchResponse.items) {
                break;
            }

            const videoIds = searchResponse.items.map(item => item.id.videoId);

            const videoResponse = await this.#makeApiRequest('videos', {
                part: 'contentDetails,liveStreamingDetails,snippet,statistics',
                id: videoIds.join(','),
            });

            for (const video of videoResponse.items) {
                const videoDuration = this.#parseDuration(video.contentDetails.duration);

                const videoData = {
                    id: video.id,
                    title: video.snippet.title,
                    description: video.snippet.description,
                    url: `https://youtube.com/watch?v=${video.id}`,
                    published_at: video.snippet.publishedAt,
                    duration: videoDuration,
                    views: parseInt(video.statistics.viewCount ?? 0),
                    comments: parseInt(video.statistics.commentCount ?? 0),
                    likes: parseInt(video.statistics.likeCount ?? 0),
                };

                if (video.liveStreamingDetails) {
                    videos.live.push(videoData);
                } else if (videoDuration <= 60) {
                    videos.shorts.push(videoData);
                } else {
                    videos.normal.push(videoData);
                }
            }

            nextPageToken = searchResponse.nextPageToken ?? null;

        } while (nextPageToken);

        return videos;
    }

    getStats = (videos) => {
        const stats = {
            total: {
                normal: videos.normal.length,
                shorts: videos.shorts.length,
                live: videos.live.length,
            },
            stats: {
                normal: {
                    views: 0,
                    comments: 0,
                    likes: 0,
                    avg_duration: 0,
                },
                shorts: {
                    views: 0,
                    comments: 0,
                    likes: 0,
                    avg_duration: 0,
                },
                live: {
                    views: 0,
                    comments: 0,
                    likes: 0,
                    avg_duration: 0,
                }
            }
        };

        for (const [type, videoList] of Object.entries(videos)) {
            let totalDuration = 0;

            for (const video of videoList) {
                stats.stats[type].views += video.views;
                stats.stats[type].comments += video.comments;
                stats.stats[type].likes += video.likes;
                totalDuration += video.duration;
            }

            if (videoList.length > 0) {
                stats.stats[type].avg_duration = totalDuration / videoList.length;
            }
        }

        return stats;
    }
}

const main = async () => {
    try {
        const youTubeLambada = new YouTubeLambada();

        // first we need the channel id
        const channelId = await youTubeLambada.getChannelId();

        // then we can fetch all videos from the channel
        const videos = await youTubeLambada.getVideos(channelId);

        // and finally get some stats
        const stats = youTubeLambada.getStats(videos);

        console.log('--- Stats by type ---\n');

        for (const [type, result] of Object.entries(stats.stats)) {
            console.log(`${type.toUpperCase()}:`);
            console.log(`Total: ${stats.total[type]}`);
            console.log(`Average duration: ${Math.round(result.avg_duration)} Seconds`);
            console.log(`Views: ${result.views.toLocaleString()}`);
            console.log(`Comments: ${result.comments.toLocaleString()}`);
            console.log(`Likes: ${result.likes.toLocaleString()}`);

            if (stats.total[type] > 0) {
                console.log(`Average views: ${Math.round(result.views / stats.total[type]).toLocaleString()}`);
            }

            console.log('\n');
        }

        console.log('\n--- Videos by type ---\n');

        for (const [type, list] of Object.entries(videos)) {
            console.log(`${type.toUpperCase()}:\n`);

            for (const video of list) {
                console.log(`Title: ${video.title}`);
                //console.log(`Description: ${video.description}`);
                console.log(`ID: ${video.id}`);
                console.log(`URL: ${video.url}`);
                console.log(`Published at: ${video.published_at}`);
                console.log(`Duration: ${video.duration}`);
                console.log(`Views: ${video.views}`);
                console.log(`Comments: ${video.comments}`);
                console.log(`Likes: ${video.likes}`);
                console.log('\n');
            }
        }

        console.log('Done! Have a nice day.');
    } catch (error) {
        console.error('Oh no, something terrible happened:', error.message);
    }
};

main();
