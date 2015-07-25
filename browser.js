/*!
 * browser JavaScript Library v1.0
 * 
 *GitHub	：	https://github.com/kongdewen1994/browser.js.git
 * 
 *判断浏览器和内核的工具（Determine the browser and the kernel of the tool）
 * 
 * Date: 2015-07-25
 * 
 * (c) Copyright 2015 Kong. All Rights Reserved. 
 */


var client = function(){

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
	
	
	//检测呈现引擎和浏览器
	var ua = navigator.userAgent;
	if(window.opera){
		
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
		
	}else if(/AppleWebkit\/(\S+)/.test(ua)){
	
		
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);
		
		//确定是Chrome还是Safari
		if(/Chrome\/(S+)/.test(ua)){
		
			
			
			engine.ver = RegExp["$1"];
			engine.chrome = parseFloat(browser.ver);
			
		}else if(/Version\/(S+)/.test(ua)){
		
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
			
		}else{
		
			//近似地确定版本号
			var safariVersion = 1;
			if(engine.webkit < 100){
			
				safariVersion = 1;
				
			}else if(engine.webkit < 312){
			
				safariVersion = 1.2;
				
			}else if(engine.webkit < 412){
				
				safariVersion = 1.3;
				
			}else{
			
				safariVersion = 2;
			
			}
			
			browser.safari = browser.ver = safariVersion;
		}
	}else if(/KHTML\/(S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
		
		engine.ver = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
		
	}else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
		
		engine.ver = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);
		
		//确认是不是Firefox
		if(/Firefox\/(\S+)/.test(ua)){
		
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
			
		}
	}else if(/MSIE ([^;]+)/.test(ua)){
	
		engine.ver = browser.ver = RegExp["$1"];
		engine.ie = browser.ie = parseFloat(engine.ver);
	
	}
	
	//检测浏览器
	browser.ie = engine.ie;
	browser.opera = engine.opera;
	
	//返回这些对象
	return{
	
		engine:engine,
		browser:browser,
	
	};
	

}();

//判断是否为IE，返回版本号
function isIE(){
	
	return client.browser.ie;
	
}

//判断是否为firebox，返回版本号
function isFF(){
	
	return client.browser.firefox;
	
}

//判断是否为chrome，返回版本号
function isCho(){
	
	return client.browser.chrome;
	
}

//判断是否为opera，返回版本号
function isO(){
	
	return client.browser.opera;
	
}

//判断是否为safari，返回版本号
function isS(){
	
	return client.browser.safari;
	
}


/*判断浏览器内核*/

//返回IE内核版本
function isMS(){
	return client.engine.ie;
}

//返回Gecko内核版本
function isGecko(){
	return client.engine.gecko;
}

//返回webkit内核版本
function isWebkit(){
	return client.engine.webkit;
}

//返回khtm内核版本号
function isKhtml(){
	return client.engine.khtml;
}

//返回opera内核版本号
function isOpear(){
	return client.engine.opera;
}


