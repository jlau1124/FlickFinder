import('../src/appwrite.js').then(()=>{
  console.log('import ok')
}).catch(err=>{
  console.error('import failed', err)
  process.exit(1)
})
