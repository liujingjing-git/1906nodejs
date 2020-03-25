const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.110.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    //选择数据库和集合
  const collection = client.db("in1906").collection("user");
  
  //获取数据
  /*collection.find({}).toArray(function(err, docs) {
        // console.log("Found the following records");
        console.log(docs)
  });*/

  //根据条件查找    条件
  /*collection.find({"name":"wyb"}).toArray(function(err, docs) {
    console.log(docs)
  });*/

  //添加数据
  /*collection.insertMany([
        {name:'liu'},{email:'liu@qq.com'}
  ],function(err,result){
      console.log(result);
  });*/

  //删除数据
  /*collection.deleteOne({email:"liu@qq.com"},function(err,result){
        console.log(result);
  });*/

  //修改数据
  collection.updateOne({email:"liu@qq.com"},{$set:{email:"liujj@qq.com"}},function(err,result){
    console.log(result);
  });

 client.close();
});