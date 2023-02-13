 const fs=require('fs')
fs.appendFile('a.txt','hello world',(error)=>{
    if(error) throw error
    console.log('hello world saved')
})
 
//openfile
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 

//writefile
fs.writeFile('mynewfile3.txt', 'Hello million!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

//deliting file
fs.unlink('a.txt',(error)=>{
    if(error) throw error;
    console.log('File deleted');
})

//filerename


fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  }); 