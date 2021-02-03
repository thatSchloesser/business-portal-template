const test = async (req, res) => {
    console.log('!!!!!!!!!!!!! in test APi call')
    res.statusCode = 200
    res.json({ name: 'John Doe' })
  }
  
  export default test
  