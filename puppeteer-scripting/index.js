const puppeteer = require('puppeteer')

async function run() {
    // launch browser
    const browser = await puppeteer.launch()

    // create page    
    const page = await browser.newPage()

    // go to the page
    await page.goto('https://traversymedia.com/')

    /////////////////////////////////////////////////////////////////////

    // do whatever we want here

    // screenshoot (overwrite if exists)
    await page.screenshot({
        path: 'images/screenshot.png',
        fullPage: true
    })

    // save to pdf
    await page.pdf({
        path: 'pdf/website.pdf',
        format: 'A4'
    })

    ////////////////////////////////////////////////////////////////////

    // close browser
    await browser.close()
}

run()