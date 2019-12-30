const bodyparser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abheet_98:abheet01@cluster0-uys35.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }).then(res => {
    console.log('mongo db connected');
}).catch(err => {
    console.error(err);
});



let aaSchema = require('../model/aaschema');


//var data = [{name : 'a',email : 'aa',cno : 6666,cl:'ug',cp:'uk',dob:'23/02/1999'},
        //    {name : 'ab',email : 'aa',cno : 6666,cl:'ug',cp:'uk',dob:'23/02/1999'}];


let urlencodedParser = bodyparser.urlencoded({extended : false});

module.exports = function(app){
    app.get('/aa',async (req,res) => {
        console.log("in get");
        try {
            let data = await aaSchema.find({});
            res.render('aa',{details : data});
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
        // details.find({},function(err,data){
        //     if(err) throw err;
        //     res.render('aa',{details : data});
        // });
    });

    app.post('/aa', urlencodedParser, async (req,res) => {
        console.log(req.body);
        try {
            let newaa;
            if(req.body.Date){
                newaa = new aaSchema({
                    Name: req.body.Name,
                    Email: req.body.Email,
                    Number: req.body.Number,
                    Course: req.body.Course,
                    Country: req.body['Country[]'],
                    Date: new Date(req.body.Date).toISOString() 
                });
            }
            else{
                newaa = new aaSchema({
                    Name: req.body.Name,
                    Email: req.body.Email,
                    Number: req.body.Number,
                    Course: req.body.Course,
                    Country: req.body['Country[]'],
                });
                
            }
            
            await aaSchema.deleteMany({Email:newaa.Email});
            
            const tp = await newaa.save();
            res.status(200).send(tp);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

        /*data.push(req.body);
        res.json(data);*/
    });

    app.get('/bb',async (req,res) => {
        console.log("in getb");
        try {
            let data = null;
            res.render('bb',{bbs : data});
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
        // details.find({},function(err,data){
        //     if(err) throw err;
        //     res.render('aa',{details : data});
        // });
    });

    app.get('/bb/:emailId', urlencodedParser, async (req,res) => {
        console.log("in get bb with param");
        let ee = req.params.emailId;
        console.log(ee);
        console.log(req.body);
        try {
            let data = await aaSchema.find({Email:ee});
            console.log(data);
            if(data.length>0){
                res.render('cc',{bbs:data});
                
            }
            else{
                res.render('dd');
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    });
    
};
