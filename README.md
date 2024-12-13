# YouTube Lambada

Fetch the videos and some stats of a YouTube channel. The script can run on a daily schedule with a GitHub action (see `.github/workflows/youtube-lambada.yml`) and commit the results to this README.md file in the `Results` section.

## Run this locally

### Clone this repository

```sh
git clone https://github.com/danielstgt/youtube-lambada.git
```

### Copy the example env file

```sh
cp .env.example .env
```

### Fill in your YouTube API key and the channel handle

```properties
YOUTUBE_API_KEY=123
CHANNEL_HANDLE=@yourchannelhandlehere
```

### Install the dependencies
```sh
bun install
```

### Run the script

```sh
node lambada.js
```

## Results

```
--- Stats by type ---

NORMAL:
Total: 7
Average duration: 2845 Seconds
👀 Views: 395
💬 Comments: 8
👍 Likes: 35
Average views: 56


SHORTS:
Total: 4
Average duration: 18 Seconds
👀 Views: 868
💬 Comments: 0
👍 Likes: 10
Average views: 217


LIVE:
Total: 6
Average duration: 3063 Seconds
👀 Views: 293
💬 Comments: 9
👍 Likes: 22
Average views: 49



--- Videos by type ---

NORMAL:

Title: Lorem Ipsum
ID: abcde12345
URL: https://youtube.com/watch?v=abcde12345
Published at: 2024-12-01T21:00:00Z
Duration: 1234
👀 Views: 18
💬 Comments: 1
👍 Likes: 2

SHORTS:

...

LIVE:

...

Done! Have a nice day.
```

