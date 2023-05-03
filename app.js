// Practise Of Array

// how to select any one value from many?
// var a = [1,2,3,4,5]
// if we want to select only number "3" from above array then,

// document.write(a[2])

// if we want to add a value at any point or replace any value from another value then,

// a[2] = 5
// document.write(a)

// in the above process we can replace "3" by "5"

// push and pop practise
// a.push(6)     
// it adds a value at last
// a.pop()
// document.write(a)
// it removes a value from last

// shift and unshift practise
// a.shift()
// it removes a value from start
// a.unshift(0)
// document.write(a)
// it adds a value at start

// Delete practise
// delete a[3]
// document.write(a)

// Splice 
// var a = [1,2,3,4,5,6,7,8,9]
// a.splice(2,5,3123,132231,3223,3223)
// // a.splice me "2"ka mtlb index nmbr 2 se numbers remove hone shuru honge
// // "5" ka mtlb index number 5 tak remove honge mtlb index nmbr  se index nummber 5 tak numbers remove hojaeenge
// // or 3123,132231,3223,3223 un remove hue we numbers ki jagaa ajaenge
// var a = ["khi","lhr","isl","quetta"]
// a.splice(1,1,"peshawer")
// document.write(a)

// Slice
// var a = [1,2,3,4,5,6,7,8,9]
// slice direct use nhi ho sktaaa islye ise kisi doosre var me copy krenge phr aage kaam krenge
// above process me index number 4 se end tk sarre nmbrs copy hojaaenge

// var b = a.slice(4,6)
// document.write(b)
// isme index nmbr 4 se lekr index nmbr 5 tk copy kregaa


//  =========================== CHAPTER 14 - 16 ====================================
// STEP 1 :
// var studentname = [" " , " " , " " , " "]
// studentname[0] = "Abu Bakar"
// studentname[1] = "Umer"
// studentname[2] = "Usman"
// studentname[3] = "Ali"
// document.write(studentname)

// // STEP 1 : 
// var fruits = ["Apple" , "Mango" , "Banana"]
// // STEP 2 :
// var num = [1,2,3,4,5,6,7,8,9]
// // STEP 3 :
// var boolean = [true,false,true,false]
// // STEP 4 :
// var mixed = ["Apple",2,3,4,false]
// // STEP 7 :
// var qualifications = ["SSC", "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PhD"]
// document.write("<h1>Qualifications :</h1>")
// document.write("<br />")
// document.write("<br />")
// document.write(qualifications[0])
// document.write("<br />")
// document.write(qualifications[1])
// document.write("<br />")
// document.write(qualifications[2])
// document.write("<br />")
// document.write(qualifications[3])
// document.write("<br />")
// document.write(qualifications[4])
// document.write("<br />")
// document.write(qualifications[5])
// document.write("<br />")
// document.write(qualifications[6])
// document.write("<br />")
// document.write(qualifications[7])

// STEP 8 :
// var a = ["Ahmed","Usman","Ali"]
// var b = [320,230,480]
// var ahmed = (320/500)*100
// var usman = (230/500)*100
// var ali = (480/500)*100
// document.write("Score of Ahmed is " + b[0] + ". " + "Percentage : " + ahmed + " %")
// document.write("<br />")
// document.write("Score of Usman is " + b[1] + ". " + "Percentage : " + usman + " %")
// document.write("<br />")
// document.write("Score of Ali is " + b[2] + ". " + "Percentage : " + ali + " %")
// document.write("<br />")

// STEP 9 :
// var color = [" ","red","orange","blue","green"] 

// a
// var user = prompt("Which colour do you want to add at the beginning of an array?")
// color[0] = user
// document.write(color)

// b
// var user = prompt("Which color do you want to add at the last of an array")
// color[5] = user
// document.write(color)

// c
// var color = [" ","red","orange","blue","green"] 
// color.unshift("brown")
// color.unshift("yellow")
// document.write(color)

// d
// var color = ["red","orange","blue","green"] 
// color.shift()
// document.write(color)

// e
// var color = ["red","orange","blue","green"] 
// color.pop()
// document.write(color)

// f
// create an array of colors
// var colors = ['red', 'green', 'blue', 'yellow'];

// // prompt the user to enter the index and color name
// var index = prompt('Enter the index where you want to add the color:');
// var color = prompt('Enter the color name:');

// // convert the index to a number
// index = parseInt(index);

// // add the color to the array at the desired position
// colors.splice(index, 0, color);

// // display the updated array in the console
// document.write(colors);

// g
// var colors = ["red","green","blue","orange","yellow"]
// var index = prompt("from which index you want to remove colours?")
// var num = prompt("how many colours do you want to remove?")
// colors.splice(index,num)
// document.write(colors)

// STEP 10 :
// var a = [320,230,480,120,]
// document.write("Scores of student : " + a)
// document.write("<br />")
// a.sort()
// document.write("Ordered scores : " + a)

// STEP 11 :
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawer"]
// document.write("Cities list : " + cities)
// document.write("<br />")
// var selected = cities.slice(1,4)
// document.write("Selected cities : " + selected)

// STEP 12 :
// var arr = ["This " , "is" , "my" , "cat"]
// var string = arr.join(' ')
// document.write(string)

// STEP 13 :
// var a = ["keyboard","mouse","printer","monitor"]
// for (var i = 0; i < a.length; i++){
//     document.write(a[i] + "<br />")
// }

// STEP 14 :
// var a = ["keyboard","mouse","printer","monitor"]
// a.reverse( )
// for (var i = 0; i < a.length; i++){
//     document.write(a[i] + "<br />")
// }

// STEP 15 :
// // Define an array of phone manufacturers
// const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Write the dropdown/select menu to the document
// document.write("<select>");

// // Loop through the phone manufacturers array and write each one as an option in the dropdown/select menu
// for (let i = 0; i < phoneManufacturers.length; i++) {
//   document.write(`<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`);
// }

// // Close the select element
// document.write("</select>");

// STEP 13 14 15 must practise


// =====================    CHAPTER 17 - 20   ======================================
// STEP 1 :
// var a = [[]]

// Step 2 practise

//STEP 3 :
// var a = [1,2,3,4,5,6,7,8,9,10] 
// for(var i = 0; i < a.length; i++){
//     document.write(a[i])
// }

// STEP 4 : maybe wrong
// var user = +prompt("Enter a number to show its multiplication table")
// var a = [2*1,2*2,2*3,2*4,2*5,2*6,2*7,2*8,2*9,2*10]
// if(user == 2){
// for (var i = 0; i < a.length; i++){
//     document.write(a[i])
// }}else

// var b = [3*1,3*2,3*3,3*4,3*5,3*6,3*7,3*8,3*9,3*10]
// if(user == 3){
// for (var i = 0; i < b.length; i++){
//     document.write(b[i])
// }}else

// var c = [4*1,4*2,4*3,4*4,4*5,4*6,4*7,4*8,4*9,4*10]
// if(user == 4){
// for (var i = 0; i < c.length; i++){
//     document.write(c[i])
// }}else

// var d = [5*1,5*2,5*3,5*4,5*5,5*6,5*7,5*8,5*9,5*10]
// if(user == 5){
// for (var i = 0; i < b.length; i++){
//     document.write(d[i])
// }}else

// var e = [6*1,6*2,6*3,6*4,6*5,6*6,6*7,6*8,6*9,6*10]
// if(user == 6){
// for (var i = 0; i < b.length; i++){
//     document.write(e[i])
// }}else

// var f = [7*1,7*2,7*3,7*4,7*5,7*6,7*7,7*8,7*9,7*10]
// if(user == 7){
// for (var i = 0; i < b.length; i++){
//     document.write(f[i])
// }}else

// var g = [8*1,8*2,8*3,8*4,8*5,8*6,8*7,8*8,8*9,8*10]
// if(user == 8){
// for (var i = 0; i < b.length; i++){
//     document.write(g[i])
// }}else

// var h = [9*1,9*2,9*3,9*4,9*5,9*6,9*7,9*8,9*9,9*10]
// if(user == 9){
// for (var i = 0; i < b.length; i++){
//     document.write(h[i])
// }}else

// var l = [10*1,10*2,10*3,10*4,10*5,10*6,10*7,10*8,10*9,10*10]
// if(user == 10){
// for (var i = 0; i < b.length; i++){
//     document.write(l[i])
// }}

// STEP 5 :
// var fruits = ["apple","banana","mango","orange","strawberry"]
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br />")
// }

// STEP 6 :
// var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var reverse = [10,9,8,7,6,5,4,3,2,1] 
// var even = [0,2,4,6,8,10,12,14,16,18,20]
// var odd = [1,3,5,7,9,11,13,15,17,19]
// var series = [2+"k",4+"k",6+"k",8+"k",10+"k",12+"k",14+"k",16+"k",18+"k",20+"k"]
// var total =  counting + "<br />" + reverse + "<br />" + even + "<br />" + odd + "<br />" + series
// for (i = 0; i < total.length; i++){
//     document.write(total[i])
// }

// STEP 7 :
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("Greetings! What do you want to order?")
// if(b == "cookie"){
//     document.write(a[2] + " is available at index 2 in our bakery")
// }else
// if(b == "cake"){
//     document.write(a[0] + "is available at 0 index in our bakery")
// }
// if( b == "pastry"){
//     document.write("Sorry! This item is not available in our bakery.")
// }

// STEP 8 :
// var a =  [24, 53, 78, 91, 12]
// document.write("Array items : " + a)
// document.write("<br />")
// document.write("The largest number is " + a[3])

// STEP 9 :
// document.write("<br />")
// document.write("Array items : " + a)
// document.write("<br />")
// document.write("The smallest number is " + a[4])

// STEP 10 :
// var a = [5, 10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 55 , 60 , 65 , 70 , 75 , 80 , 85 , 90 , 95 , 100]
// for (var i = 0; i < a.length; i++){
//     document.write(a[i] + "\n")
// }
var a = []
a[0] = 1
a[3] = 3
a.push(4,5,6)
document.write(a)