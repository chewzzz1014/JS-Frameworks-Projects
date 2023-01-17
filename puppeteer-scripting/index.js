const puppeteer = require('puppeteer')

async function run() {
    // launch browser
    const browser = await puppeteer.launch()

    // create page    
    const page = await browser.newPage()

    // go to the page
    await page.goto('https://traversymedia.com/')


    // do whatever we want here
    // screenshoot 
    await page.screenshot({
        path: 'images/screenshot.png'
    })


    // close browser
    await browser.close()
}

run()