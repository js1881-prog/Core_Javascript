// 노드의 내장 모듈 fs, http
const fs = require("fs");
const http = require("http");

// 익스프레스는 따로 설치한 서드 파티 모듈
//const express = require("express");
const { mean, stddev } = require("./module_close.js");

console.log(mean(3));
console.log(stddev(3));