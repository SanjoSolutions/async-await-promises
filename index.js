import request from '@sanjo/request'

const titleRegExp = /<title>(.+?)<\/title>/

async function extractTitle(url) {
  const response = await request(url)
  const { body } = response
  const title = titleRegExp.exec(body)[1]
  return title
}

async function logTitle(url) {
  console.log(`Title of "${url}":`, await extractTitle(url))
}

await Promise.allSettled([
  logTitle('https://www.google.com'),
  logTitle('https://www.wolframalpha.com')
])
