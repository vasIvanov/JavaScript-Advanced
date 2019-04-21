function solve(){
   const specPowers = {
      MAGES: {
         attack: 70,
         defence: 30
      },
      FIGHTERS: {
         attack: 50,
         defence: 50
      },
      TANKS: {
         attack: 20,
         defence: 80
      }
   };
   let kingdomTypes = ['CASTLE', 'DUNGEON', 'FORTRESS', 'INFERNO', 'NECROPOLIS', 'RAMPART', 'STRONGHOLD', 'TOWER', 'CONFLUX']
   $('#kingdom div button').on('click', () => {
      let kingdomType = $('#kingdom div input').eq(0).val().toUpperCase();
      let kingName = $('#kingdom div input').eq(1).val().toUpperCase();
      let isRebuilded = $(`#${kingdomType.toLowerCase()}`).css('display') === 'inline-block';
      if(kingdomTypes.includes(kingdomType) && kingName.length >=2 && !isRebuilded) {
         createKingdom(kingdomType, kingName);
         resetRebuild();

      }
      
   });

   $('#characters div:last-child button').on('click', () => {
      let spec = '';
      let $spec = $('#characters div input');
      let flag = false;
      let specToClear;
      for (let i = 0; i < 3; i++) {
         if($spec[i].checked) {
            spec = $($spec[i]).val();
            flag = true;
            specToClear = $spec[i];
            break;
         }
      }
      let charName = $('#characters div:last-child input').eq(0).val();
      let kingdomToJoin = $('#characters div:last-child input').eq(1).val().toLowerCase();
      let checkForKingdom = $(`#${kingdomToJoin}`).css('display') === 'inline-block';
      
      if(flag && charName.length >= 2 && checkForKingdom) {
         joinKingdom(charName, kingdomToJoin, spec); 
         resetJoin(specToClear);

      }
   });

   $('#actions button').on('click', () => {
      let attacker = $('#actions input').eq(0).val().toLowerCase();
      let defender = $('#actions input').eq(1).val().toLowerCase();
      let attackIsRebuild = $(`#${attacker}`).css('display') === 'inline-block';
      let defenderIsRebuild = $(`#${defender}`).css('display') === 'inline-block';
      if(attackIsRebuild && defenderIsRebuild) {
         let attackerKingdomArmy = $(`#${attacker} fieldset p`);
         let defenderKingdomArmy = $(`#${defender} fieldset p`);
         let attackerAttackPower = 0;
         let defenderDefencePower = 0;
         for (let soldiers of attackerKingdomArmy) {
            let [type, count] = $(soldiers).text().split(' - ');
            attackerAttackPower += specPowers[type].attack * +count;
         }
         for (const soldiers of defenderKingdomArmy) {
            let [type, count] = $(soldiers).text().split(' - ');
            defenderDefencePower += specPowers[type].defence * +count;
         }

         if(attackerAttackPower > defenderDefencePower) {
            $(`#${defender} h2`).text(`${$(`#${attacker} h2`).text()}`);
         }
      } else {
         $('#actions input').eq(0).val('');
         $('#actions input').eq(1).val('');
      }
      
   });



   function resetRebuild() {
      $('#kingdom div input').eq(0).val('');
      $('#kingdom div input').eq(1).val('');
   }

   function resetJoin(specToClear) {
      $('#characters div:last-child input').eq(0).val('');
      $('#characters div:last-child input').eq(1).val('');
      specToClear.checked = false;
   }
 
   function createKingdom(kingdomType, kingName) {
      
      let $kingdom = $(`#${kingdomType.toLowerCase()}`);
         
      let $h1 = $('<h1>');
      $h1.text(kingdomType);

      let $div = $('<div>');
      $div.addClass(`castle`);

      let $h2 = $('<h2>');
      $h2.text(kingName);

      let $fieldSet = $('<fieldset><legend>Army</legend><p>TANKS - 0</p><p>FIGHTERS - 0</p><p>MAGES - 0</p></fieldset>')
      let $fieldDiv = $('<div>');
      $fieldDiv.addClass('armyOutput');
      $fieldSet.append($fieldDiv);

      $kingdom.append($h1);
      $kingdom.append($div);
      $kingdom.append($h2);
      $kingdom.append($fieldSet);
      $kingdom.css('display', 'inline-block')
   }

   function joinKingdom(charName, kingdomToJoin, spec) {
      $(`#${kingdomToJoin} .armyOutput`).text($(`#${kingdomToJoin} .armyOutput`).text() + charName + ' ');
         
      let specParas = $(`#${kingdomToJoin} fieldset p`)
      let searchedSpecPara;
      for (let specPara of specParas) {
         if($(specPara).text().includes(`${spec.toLocaleUpperCase()}`)) {
            searchedSpecPara = specPara;
            break;
         }
          
      }
      let currNumber = +$(searchedSpecPara).text().split(' - ')[1];
      $(searchedSpecPara).text(`${spec.toLocaleUpperCase()}S - ${currNumber + 1}`)
   }
}

solve()


