import '../scss/main.scss'

async function printLog() {
  const promise = Promise.resolve(777)
  console.log(await promise)
}

printLog()
