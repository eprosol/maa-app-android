/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log("Waqas! Device is ready");
        var ref = window.open('http://local.muslimaid.org.au', '_blank', 'location=no,toolbar=no');
//        this.receivedEvent('deviceready');
//        this.launch("https://www.muslimaid.org.au");
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        if (navigator.connection.type == Connection.NONE) {
          navigator.notification.alert('An internet connection is required to continue');
        } else {
//            window.open('http://muslimaid.org.au', '_blank', 'location=no');            
//            window.open('http://muslimaid.org.au', '_system');                        
var ref = window.open('http://local.muslimaid.org.au', '_blank', 'location=no,toolbar=no');
//          window.location="https://www.muslimaid.org.au";
//            window.open('https://www.muslimaid.org.au', '_self','location=no');
        }
    }

    launch: function(url){
        if (navigator.connection.type == Connection.NONE) {
          navigator.notification.alert('An internet connection is required to continue');
        } else {
            window.open(url, '_self','location=no');            
//            window.location = url;
        }        
    }

};

app.initialize();