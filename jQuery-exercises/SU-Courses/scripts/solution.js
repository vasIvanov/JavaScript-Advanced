function solve() {
   let $courses = $('.courseBody ul li')
   let courses = [];
   let bonusCourse = false;
   let isCore = false;
   for (const course of $courses.toArray()) {
      courses.push($(course).text().trim().split(' - ')[0]);      
   }
   let coursePrices = {
      'JS-Advanced': 180,
      'JS-Fundamentals': 170,
      'JS-Applications': 190,
      'js-core': 507.6,
      'JS-Web': 490
   };
   let isOnline = false;
   let inputFields = document.querySelectorAll('.courseBody ul li input');
   $('.courseFoot button').on('click', () => {
      let selectedCourses = [];
      for (let field of inputFields) {
         if(field.checked){
            selectedCourses.push($(field).val());
            
         }
      }
      let educationForm = document.querySelectorAll('#educationForm input');
      if(educationForm[0].checked){
         isOnline = false;
      } else {
         isOnline = true;
      }

      
      if(isOnline) {
         coursePrices['JS-Advanced'] -= (coursePrices['JS-Advanced'] * 6 / 100);
         coursePrices['JS-Fundamentals'] -= (coursePrices['JS-Fundamentals'] * 6 / 100);
         coursePrices['JS-Applications'] -= (coursePrices['JS-Applications'] * 6 / 100);
         coursePrices['JS-Web'] -= (coursePrices['JS-Web'] * 6 / 100);
      }


      if(selectedCourses.includes('js-advanced') && selectedCourses.includes('js-fundamentals')) {
         coursePrices['JS-Advanced'] -= (coursePrices['JS-Advanced'] * 10 / 100);
      } 
      if(selectedCourses.includes('js-advanced') && selectedCourses.includes('js-fundamentals') && selectedCourses.includes('js-applications')) {
         isCore = true;
        
      }
      if(selectedCourses.includes('js-advanced') && selectedCourses.includes('js-fundamentals') && selectedCourses.includes('js-applications') && selectedCourses.includes('js-web')) {
         bonusCourse = true;
      }
      
      
      let $cost = $('#myCourses .courseFoot p');
      let currentCost = 0;
      for (const course of selectedCourses) {
         let $li = $('<li>');
         let capitalLetters = course.slice(0, 4).toUpperCase();
         let lowerLetters = course.slice(4);
         let fullName = capitalLetters+lowerLetters
         $li.text(fullName);
         $li.appendTo($('#myCourses .courseBody ul'));
         
         

         
      }


      for (const course of selectedCourses) {
         if(isCore) {
            if(isOnline) {
               coursePrices['js-core'] = 477.2;

            }
            selectedCourses.splice(selectedCourses.indexOf('js-advanced'), 1);
            selectedCourses.splice(selectedCourses.indexOf('js-fundamentals'), 1);
            selectedCourses.splice(selectedCourses.indexOf('js-applications'), 1);
            currentCost += coursePrices['js-core'];
            isCore = false;
         } else {
            let capitalLetters = course.slice(0, 4).toUpperCase();
            let lowerLetters = course.slice(4);
            let fullName = capitalLetters+lowerLetters
            currentCost += +$cost.text().split('.')[0].split(': ')[1];
         
            currentCost += coursePrices[fullName];
         }
      }
      if(bonusCourse) {
         let $li = $('<li>');
         $li.text('HTML and CSS');
         $li.appendTo($('#myCourses .courseBody ul'));
      }

      $cost.text('Cost: ' + Math.floor(currentCost) + '.00 BGN');
      
   });
   
   
   
}

solve();