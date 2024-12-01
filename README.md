# YouTube Lambada

Fetch the latest videos and stats from any YouTube channel. This runs daily with a GitHub action and commits the stats in this README.md file. Demonstration results below.

## Run this local

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

