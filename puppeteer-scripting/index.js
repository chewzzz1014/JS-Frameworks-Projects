// for writing into file
const fs = require('fs')
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

    // html
    const html = await page.content()
    // write into file
    fs.writeFile('output/layout.html', html, (err) => {
        if (err)
            throw err
        console.log('HTML File saved')
    })

    // evaluate context of page
    const title = await page.evaluate(() => document.title)
    console.log(title)

    // get all text
    const text = await page.evaluate(() => document.body.innerText)
    // write into file
    fs.writeFile('output/text.txt', text, (err) => {
        if (err)
            throw err
        console.log('Text File saved')
    })

    // get all links into array
    // select by anchor tag
    const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll('a'), (e) => e.href
        ))
    // write into file
    fs.writeFile('output/links.json', JSON.stringify(links), (err) => {
        if (err)
            throw err
        console.log('Links File saved')
    })

    // card nested inside courses
    const courses = await page.evaluate(() =>
        Array.from(document.querySelectorAll('#courses .card'),
            (e) => ({
                // get title from card body's h3
                title: e.querySelector('.card-body h3').innerText,
                level: e.querySelector('.card-body .level').innerText,
                url: e.querySelector('.card-footer a').href,
                promo: e.querySelector('.card-footer .promo-code .promo').innerText
            })
        ))

    // another way to scrape
    const courses1 = await page.$$eval('#courses .card', (ele) => ele.map(e => ({
        title: e.querySelector('.card-body h3').innerText,
        level: e.querySelector('.card-body .level').innerText,
        url: e.querySelector('.card-footer a').href,
        promo: e.querySelector('.card-footer .promo-code .promo').innerText
    }))
    )

    // write into file
    fs.writeFile('output/courses.json', JSON.stringify(courses1), (err) => {
        if (err)
            throw err
        console.log('File saved')
    })

    ////////////////////////////////////////////////////////////////////

    // close browser
    await browser.close()
}

run()