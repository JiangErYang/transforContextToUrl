{\rtf1\ansi\ansicpg936\cocoartf1561\cocoasubrtf400
{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0   let reg = /((http|ftp|https|file):\\/\\/([\\w\\-]+\\.)+[\\w\\-]+(\\/[\\w\\-\\.\\/?\\@\\%\\!\\&=\\+\\~\\:\\#\\;\\,]*)?)/ig;\
      function replaceReg(reg,str)\{\
         return str.replace(reg,function(m)\{\
           return '<a  href="'+m+'" target="_blank" >
\f1 \'c1\'b4\'bd\'d3\'b5\'d8\'d6\'b7
\f0 </a>'\
         \})\
         \}\
         return <span>\
           <span  dangerouslySetInnerHTML=\{\{__html:replaceReg(reg,record.content)\}\}>\
           </span>\
         </span>}