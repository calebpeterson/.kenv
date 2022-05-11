// Name: Ensure Wallpaper

// System: unlock-screen
// Index: 10000

import "@johnlindquist/kit"

await applescript('tell application "System Events" to set picture of every desktop to "/Users/caleb/Pictures/gradient-3.png"')
