var express = require('express');
var os = require('os');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({
    hostname : os.hostname(),
    type : os.type(),
    platform : os.platform()
  });
});
router.get('/cpus',(req, res) =>{
    res.json({
        cpus:os.cpus()
     }
    );
  });
  router.get('/cpus/:id/', function(req, res, next) {
    var cpuId = req.params.id;
    var cpus = os.cpus();
    
    if (cpuId >= 0 && cpuId < cpus.length) {
      res.json(cpus[cpuId]);
    } else {
      res.status(404).json({ error: 'Invalid CPU ID' });
  };});


  router.get('/products', (req, res) => {
    res.json(products);
  });


module.exports = router;