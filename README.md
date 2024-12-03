# YouTube Lambada

Fetch the latest videos and stats from any YouTube channel. This runs daily with a GitHub action and commits the stats in this README.md file. Demonstration results below.

## Run this locally

```sh
# copy the example env file and fill it with your key and channel handle
cp .env.example .env

# install the dependencies
bun install

# run the script
node lambada.js
```

## Run this with GitHub actions

Take a look at the directory `.github/workflows/youtube-lambada.yml`.

If you're currently streaming, stop the screen sharing for this part: Go to *Repository* -> *Settings* -> *Secrets and variables* -> *Actions* and create the secrets for `YOUTUBE_API_KEY` and `CHANNEL_HANDLE`.

## Results

```
--- Stats by type ---

NORMAL:
Total: 6
Average duration: 2933 Seconds
👀 Views: 340
💬 Comments: 6
👍 Likes: 31
Average views: 57


SHORTS:
Total: 4
Average duration: 18 Seconds
👀 Views: 861
💬 Comments: 0
👍 Likes: 10
Average views: 215


LIVE:
Total: 6
Average duration: 3063 Seconds
👀 Views: 290
💬 Comments: 9
👍 Likes: 22
Average views: 48



--- Videos by type ---

NORMAL:

Title: 1.6 - Technical SEO & Web Performance with Estela
ID: XNCP8HG_C04
URL: https://youtube.com/watch?v=XNCP8HG_C04
Published at: 2024-11-28T11:00:40Z
Duration: 3212
👀 Views: 31
💬 Comments: 0
👍 Likes: 4


Title: 1.5 - 2024 Trends & developer state of reports
ID: rzXSQ49ii-E
URL: https://youtube.com/watch?v=rzXSQ49ii-E
Published at: 2024-11-21T17:00:54Z
Duration: 3476
👀 Views: 32
💬 Comments: 1
👍 Likes: 1


Title: 1.4 - Talking about growth and community work with Vasilika
ID: 0GcQv-IAGgY
URL: https://youtube.com/watch?v=0GcQv-IAGgY
Published at: 2024-11-02T19:24:42Z
Duration: 2952
👀 Views: 59
💬 Comments: 1
👍 Likes: 6


Title: 1.3 - Pet Projects with Arisa, Josi & Alba
ID: 1ad-mpmTlhs
URL: https://youtube.com/watch?v=1ad-mpmTlhs
Published at: 2024-10-18T08:00:02Z
Duration: 2702
👀 Views: 37
💬 Comments: 0
👍 Likes: 3


Title: 1.2 - Learning how to write & publish technical books with Maya Shavin
ID: MulXhuTNdqk
URL: https://youtube.com/watch?v=MulXhuTNdqk
Published at: 2024-09-26T17:36:07Z
Duration: 3223
👀 Views: 64
💬 Comments: 1
👍 Likes: 5


Title: 1.1 - Welcome to As ANY! Meet the new podcast and its hosts.
ID: f_BsDpKCt3Y
URL: https://youtube.com/watch?v=f_BsDpKCt3Y
Published at: 2024-09-17T09:38:23Z
Duration: 2033
👀 Views: 117
💬 Comments: 3
👍 Likes: 12


SHORTS:

Title: It's all about the data... 😏
ID: SpyKyPfuJjA
URL: https://youtube.com/watch?v=SpyKyPfuJjA
Published at: 2024-11-26T17:09:10Z
Duration: 34
👀 Views: 235
💬 Comments: 0
👍 Likes: 0


Title: How will DevRel change when AI takes our jobs away?
ID: qF_hb66tMVI
URL: https://youtube.com/watch?v=qF_hb66tMVI
Published at: 2024-11-01T08:43:39Z
Duration: 10
👀 Views: 524
💬 Comments: 0
👍 Likes: 4


Title: How will DevRel change when AI takes all of our jobs away?
ID: ct03EQPbXYE
URL: https://youtube.com/watch?v=ct03EQPbXYE
Published at: 2024-11-01T08:39:55Z
Duration: 10
👀 Views: 43
💬 Comments: 0
👍 Likes: 1


Title: Why do we call the podcast “As ANY”?
ID: JcvSobBEnJU
URL: https://youtube.com/watch?v=JcvSobBEnJU
Published at: 2024-09-19T13:08:10Z
Duration: 18
👀 Views: 59
💬 Comments: 0
👍 Likes: 5


LIVE:

Title: [LIVE] Technical SEO & Web Performance with Estela ⚡️
ID: SDcDutjZrp8
URL: https://youtube.com/watch?v=SDcDutjZrp8
Published at: 2024-11-27T03:51:49Z
Duration: 3463
👀 Views: 19
💬 Comments: 0
👍 Likes: 3


Title: [LIVE] State of the Web with Alba & Josi | Chatting As ANY
ID: DYETgt08ZFg
URL: https://youtube.com/watch?v=DYETgt08ZFg
Published at: 2024-11-21T04:16:10Z
Duration: 3927
👀 Views: 38
💬 Comments: 0
👍 Likes: 2


Title: [LIVE] Growth & Community Work with Vasilika ⚡️
ID: u2G1M7fMF5w
URL: https://youtube.com/watch?v=u2G1M7fMF5w
Published at: 2024-10-31T04:06:16Z
Duration: 3031
👀 Views: 39
💬 Comments: 0
👍 Likes: 3


Title: [LIVE] Pet Project with Alba, Josi & Arisa | Chatting As ANY
ID: PTrVun7nx5g
URL: https://youtube.com/watch?v=PTrVun7nx5g
Published at: 2024-10-16T02:53:31Z
Duration: 2313
👀 Views: 59
💬 Comments: 1
👍 Likes: 8


Title: [LIVE] Writing tech books as any with Maya Shavin ⚡️
ID: yUF9gBteeco
URL: https://youtube.com/watch?v=yUF9gBteeco
Published at: 2024-09-25T03:04:42Z
Duration: 3237
👀 Views: 60
💬 Comments: 0
👍 Likes: 2


Title: [LIVE] Welcome to As ANY! Chatting with Arisa, Josi & Alba
ID: BNRwVMYGVnk
URL: https://youtube.com/watch?v=BNRwVMYGVnk
Published at: 2024-09-11T02:50:15Z
Duration: 2404
👀 Views: 75
💬 Comments: 8
👍 Likes: 4


Done! Have a nice day.
```

