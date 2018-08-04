<template>
    <div class="parent">
        <div>
            <p class="title">commonjs(服务端)用于客户端的方法</p>
            <strong>原始commonjs不能用于客户端 </strong>
            <p>
                @start-webpack/frontend/vue 执行命令:   <br>
                <ul>
                    <li>cd src/containers/test/t7-import/1-commonjs-used-in-client/</li>
                    <li>cp src.js dist.js  // 表示使用原始commonjs</li>
                    <li>open -a "Google Chrome" index.html // 浏览器打开页面,查看控制台,应会报错</li>
                </ul>
            </p>
            <strong>browserify转化后的commonjs可　用于客户端: </strong>
            <p>
                @start-webpack/frontend/vue 执行命令:   <br>
                <ul>
                    <li>cd src/containers/test/t7-import/1-commonjs-used-in-client/</li>
                    <li>browserify src.js > dist.js  // 表示使用原始commonjs(sudo npm install browserify -g)</li>
                    <li>open -a "Google Chrome" index.html // 浏览器打开页面,查看控制台,应会报错</li>
                </ul>
            </p>            
        </div><hr>        
        <div>
            <p class="title">commonjs(服务端)和es6-module(服务端)输出数据类型的比较</p>
            <strong>commonjs测试: </strong>
            <p> 
                @start-webpack/frontend/vue 执行命令:    <br>
                node src/containers/test/t7-import/2-commonjs-vs-es6module/commonjs/main.js   <br>
            </p>
            <strong>es6-module测试: </strong>
            <p>
                @start-webpack/frontend/vue 执行命令:    <br>
                babel-node src/containers/test/t7-import/2-commonjs-vs-es6module/es6module/main.js   <br>
            </p>
        </div><hr>
        <div>
            <p class="title">es6module export vs exportdefault @console</p>
            <button @click="handleExportDefault">exportdefault</button>
            <button @click="handleExport">export</button>
            <button @click="handleBoth">both</button>
        </div><hr>
        <div class="title">
            <p>es6module import() @console</p>
            <button @click="handleDynamicImportByPromise">import():promise方式</button>
            <button @click="handleDynamicImportByAsyncAwait">import():async-await方式</button>
        </div><hr>                                     
    </div>
</template>
<script>
    import exportDefaultMod from './3-export-vs-exportdefault/exportdefault.js';
    import {name,nick,f1,f2,obj,nameNew} from './3-export-vs-exportdefault/export.js';
    // import * as exportMod from './3-export-vs-exportdefault/export.js'; // ok 也可以整体导出
    import * as bothMod from './3-export-vs-exportdefault/both-export-exportdefault.js';
    import './simple.js';

    export default {
        name: "t7-import",
        data() {
            return {
            }
        },
        mounted() {
            console.log("\r\nmounted...");
        },
        methods:{
            handleExportDefault(){
                console.log('\r\ntest es6module exportdefault...');
                console.log(exportDefaultMod);
                console.log(exportDefaultMod && exportDefaultMod.name);
                console.log(exportDefaultMod && exportDefaultMod.nick);
                exportDefaultMod.f1 && exportDefaultMod.f1();
                exportDefaultMod.f2 && exportDefaultMod.f2();
            },
            handleExport(){
                console.log('\r\ntest es6module export...');
                // console.log(exportMod);
                console.log(name);
                console.log(nick);
                f1 && f1();
                f2 && f2();
                console.log(obj);
                console.log(nameNew);
            },
            handleBoth(){
                console.log('\r\ntest es6module both export and exportdefault...');
                console.log(bothMod);
                bothMod.default && bothMod.default();
                bothMod.doStuff && bothMod.doStuff();
            },
            handleDynamicImportByPromise(){
                import('./3-export-vs-exportdefault/both-export-exportdefault.js').then(data=>{
                    console.log('\r\nhandleDynamicImportByPromise data',data);
                    data.default && data.default();
                    data.doStuff && data.doStuff();
                },error=>{
                    console.log('\r\nhandleDynamicImportByPromise error',error);
                })
            },
            handleDynamicImportByAsyncAwait(){
                (async ()=>{
                    try{
                        const data = await import('./3-export-vs-exportdefault/both-export-exportdefault.js');
                        console.log('\r\nhandleDynamicImportByAsyncAwait data',data);
                        data.default && data.default();
                        data.doStuff && data.doStuff();                        
                    }catch(error){
                        console.log('\r\nhandleDynamicImportByAsyncAwait error',error);
                    }
                })();
            }
        }
    };
</script>
