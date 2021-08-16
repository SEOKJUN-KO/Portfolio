var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.render('index', { title: 'Express' });
});

router.get('/space', function(req, res){
  res.render('space');
});

router.get('/space_clubhouse', function(req, res){
  res.render('space_clubhouse');
});

router.get('/space_playx', function(req, res){
  res.render('space_playx');
});

router.get('/course', function(req, res){
  res.render('course');
});

router.get('/mypage_reservation_status', function(req, res){
  res.render('mypage_reservation_status');
});

router.get('/reservation_main', function(req, res){
  res.render('reservation_main');
});

router.get('/mypage_payment_history', function(req, res){
  res.render('mypage_payment_history');
});

router.get('/mypage_my_coupon', function(req, res){
  res.render('mypage_my_coupon');
});

router.get('/mypage_empty', function(req, res){ /* 지울 예정 */
  res.render('mypage_empty');
});

router.get('/reservation_step01', function(req, res) {
  res.render('reservation_step01');
});

router.get('/reservation_maxThird_step01', function(req, res) {
  res.render('reservation_maxThird_step01');
});

router.get('/reservation_join_step01', function(req, res) {
  res.render('reservation_join_step01');
});

router.get('/reservation_step02', function(req, res) {
  res.render('reservation_step02');
});

router.get('/reservation_maxThird_step02', function(req, res) {
  res.render('reservation_maxThird_step02');
});

router.get('/reservation_join_step02', function(req, res) {
  res.render('reservation_join_step02');
});

router.get('/reservation_all_step03', function(req, res) {
  res.render('reservation_all_step03');
});

router.get('/reservation_half_step03', function(req, res) {
  res.render('reservation_half_step03');
});

router.get('/reservation_third_step03', function(req, res) {
  res.render('reservation_third_step03');
});

router.get('/reservation_quarter_step03', function(req, res) {
  res.render('reservation_quarter_step03');
});

router.get('/reservation_payment', function(req, res) {
  res.render('reservation_payment');
});

router.get('/service_tos', function(req, res) {
  res.render('service_tos');
});

module.exports = router;
