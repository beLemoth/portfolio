var skillsGroup = {
    "Frontend": {
        "HTML5":"90",
        "CSS3":"80",
        "JavaScript & jQuery":"70"
    },
    "Backend": {
        "PHP":"40",
        "mySQL":"20",
        "Node.js & npm":"50",
        "Mongo.db":"20"
    },
    "WorkFlow": {
        "Git":"40",
        "Gulp":"70",
        "Bower":"70"
    }
};

function skillListBuild (){

    function createSkillBlock(parent, className, blockType) {
        blockType = blockType || 'div';
        var block = document.createElement(blockType);
        block.className = className;
        parent.appendChild(block);

        return block;
    }

    for(skills in skillsGroup) {

        var skillGroupListItem = createSkillBlock(skillsBlock, 'skill-group-list__item'),
            skillGroupListTitle = createSkillBlock(skillGroupListItem, 'skill-group-list__title'),
            skillsList = createSkillBlock(skillGroupListItem, 'skills-list', 'ul');

        skillGroupListTitle.textContent = skills;

        for(skillItem in skillsGroup[skills]) {

            var value = skillsGroup[skills][skillItem],
                skillsListItem = createSkillBlock(skillsList, 'skills-list__item', 'li'),
                skill = createSkillBlock(skillsListItem, 'skill');

            skill.dataset.skillName = skillItem;
            skill.dataset.skillGroup = skills;
            skill.dataset.skillValue = value;

            var skillCircle = '<svg class="skill__circle" viewbox="0 0 120 120" preserveAspectRatio="none">';
            skillCircle += '<circle class="skill__bg skill__bg_grey" cx="60" cy="60" r="60"></circle>';
            skillCircle += '<circle class="skill__indicator skill__indicator_green" cx="60" cy="60" r="50" fill="none" stroke-dasharray="0 0" stroke-width="20" stroke-opacity="0" data-value="'+value+'"></circle>';
            skillCircle += '<circle class="skill_front skill__front_white" cx="60" cy="60" r="40"></circle></svg>';

            skill.innerHTML = skillCircle;

            var skillName = createSkillBlock(skill,'skill__name');
            skillName.innerText = skillItem;
        }
    }

    var skillGroups = document.querySelectorAll('.skill-group-list__item');
    var windowHeight = window.innerHeight;

    window.addEventListener('scroll', function() {

        [].forEach.call(skillGroups, function(skillGroup){
            if(skillGroup.getBoundingClientRect().top < windowHeight*.7 && !skillGroup.inited){
                var skills = skillGroup.querySelectorAll('.skill');
                skillGroup.inited = true;
                [].forEach.call(skills, function(item){
                    var skillIndicator = item.querySelector('.skill__indicator'),
                        itemValue = item.dataset.skillValue;

                    skillCircleFilling(skillIndicator, itemValue);
                })
            }
        })
    });
}

function skillCircleFilling(block, value) {
    var step = value/20;
    (function filling(filled) {
        block.attributes['stroke-dasharray'].value = (3.14*filled)+' '+(314-(3.14*filled));
        block.attributes['stroke-opacity'].value = filled/100;
        if(filled < value) {
            requestAnimationFrame(function(){
                if(filled+=step<value) {
                    filling(filled);
                } else {filling(value)}
            });
        }
    })(0);
}

var skillsBlock = document.querySelector('.skill-group-list');

if (skillsBlock) {
    skillListBuild();
}


