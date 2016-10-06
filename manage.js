function userChoice() {
                frameRate = parseInt(document.thisform.fra.value);
                extension = document.thisform.fty.value;
                idName = document.thisform.iti.value;
                reverseAnimationSpeed = document.thisform.ras.value;
                defImage = parseInt(document.thisform.dim.value);
                totalImages = parseInt(document.thisform.tim.value);
                imagesPath = document.thisform.pin.value;
                loopTimes = parseInt(document.thisform.nol.value);
                
                e = document.getElementById("loo").value;
                
                loop = (e === "true");
                
                f = document.getElementById("rlo").value;
                
                restartLoop = (f === "true");
                
                g = document.getElementById("rea").value;
                
                reverseAnimation = (g === "true");
                
                if(defImage == null)
                    defImage = undefined;
                
                fi.resetAnim();
                
                fi = new flashImage(totalImages, frameRate, imagesPath, extension, idName, false, loop, restartLoop, loopTimes, reverseAnimationSpeed, reverseAnimation, defImage);
                
                fi.preload();
    
                return false;
            }
            
            function selection() {
                userSelection = document.getElementById("one").value;
                if(userSelection === "one") {
                    document.getElementById("demo").src = "one/one0051.jpg";
                    
                    totalImages = 50;
                    frameRate = 24;
                    imagesPath = "one/one";
                    extension = ".jpg";
                    idName = "demo";
                    loop = false;
                    restartLoop = false;
                    defImage = 51;
                    reverseAnimationSpeed = 6;
                    reverseAnimation = false;
                    loopTimes = -1;
                } else {
                    document.getElementById("demo").src = "images/flash0050.jpg";
                    
                    totalImages = 100;
                    frameRate = 24;
                    imagesPath = "images/flash";
                    extension = ".jpg";
                    idName = "demo";
                    loop = false;
                    restartLoop = false;
                    defImage = 50;
                    reverseAnimationSpeed = 6;
                    reverseAnimation = false;
                    loopTimes = 0;
                }
                
                
                document.getElementById("demo").setAttribute('onclick','fi.flashTest()'); 
                document.getElementById("reset").disabled = false;
                
                document.getElementById("tim").value = totalImages;
                document.getElementById("fra").value = frameRate;
                document.getElementById("pin").value = imagesPath;
                document.getElementById("fty").value = extension;
                document.getElementById("iti").value = idName;
                document.getElementById("loo").selected = "False";
                document.getElementById("rlo").selected = "False";
                document.getElementById("nol").value = loopTimes;
                document.getElementById("ras").value = reverseAnimationSpeed;
                document.getElementById("rea").selected = "True";
                document.getElementById("dim").value = defImage;
                
                fi = new flashImage(totalImages, frameRate, imagesPath, extension, idName, false, loop, restartLoop, loopTimes, reverseAnimationSpeed, reverseAnimation, defImage);
                
                fi.preload();
                
                return false;
            }