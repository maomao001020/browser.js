# browser.js
判断浏览器和内核的工具（Determine the browser and the kernel of the tool）


首先引入browser.js 返回 client 对象：


client 对象下有两个对象：engine 和 browser，如下：


    //呈现引擎
	var engine = {
		
		ie:0,
		gecko:0,
		webkit:0,
		khtml:0,
		opera:0,
		
		//完整的版本号
		ver:null
		
	};
	
	//浏览器
	var browser = {
	
		//主要浏览器
		ie:0,
		firefox:0,
		safari:0,
		konq:0,
		opera:0,
		chrome:0,
		
		//具体版本号
		ver:null
		
	};
	
	可以返回如：
	client.engine.webkit（返回webkit内核版本号）
	client.browser.chrome（返回chrome版本号）
	
	/---------便利函数调用---------/
	

isIE();      //判断是否为IE，返回版本号

isFF();      //判断是否为firebox，返回版本号

isCho();     //判断是否为chrome，返回版本号

isO();       //判断是否为opera，返回版本号

isS();       //判断是否为safari，返回版本号

/*判断浏览器内核*/

isMS();     //返回IE内核版本

isGecko();  //返回Gecko内核版本

isWebkit(); //返回webkit内核版本

isKhtml();  //返回khtm内核版本号

isOpear();  //返回opera内核版本号








