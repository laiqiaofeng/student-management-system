/*
Navicat MySQL Data Transfer

Source Server         : 数据库1
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : 学生管理系统数据库

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-06-26 20:41:18
*/


SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `s_1630341`
-- ----------------------------
DROP TABLE IF EXISTS `s_1630341`;
CREATE TABLE `s_1630341` (
  `id` int(32) NOT NULL AUTO_INCREMENT COMMENT '学生id',
  `name` varchar(32) COLLATE utf8_german2_ci NOT NULL COMMENT '学生名字',
  `number` int(32) NOT NULL COMMENT '学生学号',
  `sex` varchar(4) COLLATE utf8_german2_ci NOT NULL COMMENT '学生性别',
  `age` int(8) NOT NULL COMMENT '学生年龄',
  `headImg` text CHARACTER SET utf8 COMMENT '学生头像',
  `isMember` tinyint(4) NOT NULL COMMENT '是否是团员',
  `isPartyMember` tinyint(4) NOT NULL COMMENT '是否是党员',
  `dateOfBirth` varchar(32) COLLATE utf8_german2_ci NOT NULL COMMENT '出生日期',
  `s_math` int(32) NOT NULL DEFAULT '-1',
  `s_english` int(32) NOT NULL DEFAULT '-1',
  `s_physics` int(32) NOT NULL DEFAULT '-1',
  `s_chemistry` int(32) NOT NULL DEFAULT '-1',
  `ccie` text COLLATE utf8_german2_ci COMMENT '证书',
  `award` text COLLATE utf8_german2_ci COMMENT '奖状',
  `region` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL COMMENT '地址',
  `tel` varchar(128) COLLATE utf8_german2_ci NOT NULL COMMENT '电话号码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

-- ----------------------------
-- Records of s_1630341
-- ----------------------------
INSERT INTO `s_1630341` VALUES ('1', '小猫', '1', '男', '19', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3942642363,1545483800&fm=27&gp=0.jpg', '1', '0', '2019-06-25', '32', '43', '76', '76', '英语四级|英语六级', '大奖赛一等奖', null, '0');
INSERT INTO `s_1630341` VALUES ('3', '小鸡', '3', '男', '17', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3283830298,1404896712&fm=27&gp=0.jpg', '0', '0', '2019-05-08', '86', '65', '-1', '44', null, '物理竞赛二等奖', null, '0');

-- ----------------------------
-- Table structure for `s_1630344`
-- ----------------------------
DROP TABLE IF EXISTS `s_1630344`;
CREATE TABLE `s_1630344` (
  `id` int(32) NOT NULL AUTO_INCREMENT COMMENT '学生id',
  `name` varchar(32) COLLATE utf8_german2_ci NOT NULL COMMENT '学生姓名',
  `number` int(32) NOT NULL COMMENT '学生学号',
  `sex` varchar(4) COLLATE utf8_german2_ci NOT NULL COMMENT '学生性别',
  `age` int(8) NOT NULL COMMENT '学生年龄',
  `isMember` tinyint(4) NOT NULL COMMENT '是否团员',
  `isParthyMember` tinyint(4) NOT NULL COMMENT '是否党员',
  `headImg` text COLLATE utf8_german2_ci COMMENT '出生日期',
  `dateOfBirth` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

-- ----------------------------
-- Records of s_1630344
-- ----------------------------

-- ----------------------------
-- Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '教师id',
  `name` varchar(32) COLLATE utf8_german2_ci NOT NULL COMMENT '教师姓名',
  `jobNumber` int(32) NOT NULL COMMENT '教师工号',
  `grand` text COLLATE utf8_german2_ci NOT NULL COMMENT '所教班级',
  `sex` varchar(4) COLLATE utf8_german2_ci NOT NULL COMMENT '性别',
  `age` int(32) NOT NULL COMMENT '教师年级',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '张三', '1001', '1630341|1630344', '男', '32');
INSERT INTO `teacher` VALUES ('2', 'admin', '1000', '1630341|1630344|1630342', '女', '26');
INSERT INTO `teacher` VALUES ('3', '李四', '1002', '1730333', '男', '30');

-- ----------------------------
