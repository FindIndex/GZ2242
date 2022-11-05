"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\6.0\bin\mongod.cfg" --service

数据库-集合-文档-字段

<!-- 查看当前使用数据库 -->
db

<!-- 使用某个数据库(创建数据库) -->
use learn_mongo

<!-- 在user集合插入一条（创建了集合） -->
db.users.insertOne({name:"nick",age:17, gender:1})


<!-- 在集合查找数据 -->
db.users.findOne({name:'marry'})
db.users.find({})