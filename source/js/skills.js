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
                array = 3.14*value,
                offset = 314-array;

            var skillsListItem = createSkillBlock(skillsList, 'skills-list__item', 'li'),
                skill = createSkillBlock(skillsListItem, 'skill');

            var skillCircle = '<svg class="skill__circle" viewbox="0 0 120 120" preserveAspectRatio="none">';
            skillCircle += '<circle class="skill__bg skill__bg_grey" cx="60" cy="60" r="60"></circle>';
            //skillCircle += '<circle class="skill__indicator skill__indicator_green" cx="60" cy="60" r="50" fill="none" stroke-dasharray="0 0" stroke-width="20" stroke-opacity="0" data-value="'+value+'"></circle>';
            skillCircle += '<circle class="skill__indicator skill__indicator_green" cx="60" cy="60" r="50" fill="none" stroke-dasharray="'+array+' '+offset+'" stroke-width="20" stroke-opacity="'+value/100+'"></circle>';
            skillCircle += '<circle class="skill_front skill__front_white" cx="60" cy="60" r="40"></circle></svg>';

            skill.innerHTML = skillCircle;

            var skillName = createSkillBlock(skill,'skill__name');
            skillName.innerText = skillItem;
        }
    }
}

var skillsBlock = document.querySelector('.skill-group-list');

if (skillsBlock) skillListBuild();
