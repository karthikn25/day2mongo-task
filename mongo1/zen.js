//Find all the topics and tasks which are thought in the month of October
db.zen.aggregate([{$match:{month:"october"}},{$project:{"topics":1,"tasks":1,}}])

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zen.find({company_drives:{$gte:15, $lte:31}})

//Find all the company drives and students who are appeared for the placement.
db.zen.aggregate([{$match:{interview:"attend"}},{$project:{"company":1,}}])

//Find the number of problems solved by the user in codekata
db.zen.find().forEach(function(stud){print("problem solved :",stud.codekata)})

//Find all the mentors with who has the mentee's count more than 15
db.zen.aggregate([{$match:{mentee_count:{$gt:15}}},{$group:{_id:"$mentors"}}])

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zen.find({$and:[{attendance:'absend'},{task_submit:'no'},{company_drives:{$gte:15,$gte:31}}]})