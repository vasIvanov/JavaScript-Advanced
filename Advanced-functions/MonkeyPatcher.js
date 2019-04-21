function solution (input) {
    function isItHot(upvotes, downvotes) {
        let totalVotes = upvotes + downvotes;
        if((totalVotes * upvotes) / 100 > 66){
            return true;
        } else {
            return false;
        }
    }
        let scoreInfo = [];
        let status = '';
        if(input === 'upvote') {
            this.upvotes += 1;
        } else if (input === 'downvote') {
            this.downvotes += 1;
        } else if (input === 'score') {
            let upvotesadd = 0;
            let downvotesadd = 0 
            let flag = true;
            if(this.upvotes > 50 || this.downvotes > 50){
                flag = false;
                if(this.upvotes > this.downvotes) {
                    let add = this.upvotes * 0.25
                    upvotesadd = add + this.upvotes;
                    downvotesadd = add + this.downvotes;
                } else {
                    let add = this.downvotes * 0.25;
                    upvotesadd = add + this.upvotes;
                    downvotesadd = add + this.downvotes;
                }
            }
            let hotflag = false;
            let score = this.upvotes - this.downvotes;
            if(this.upvotes + this.downvotes < 10) {
                status = 'new';
            } else if(score < 0) {
                status = 'unpopular';
            } else if(isItHot(this.upvotes, this.downvotes) && this.upvotes + this.downvotes > 10){
                status = 'hot';
                hotflag = true;
            } else if(score > 0 && (this.upvotes > 100 || this.downvotes > 100) && !hotflag) {
                status = 'controversial';
            } else {
                status = 'new';
            }
            if(flag) {
                scoreInfo.push(Math.ceil(this.upvotes), Math.ceil(this.downvotes), score, status)
            } else {
                scoreInfo.push(Math.ceil(upvotesadd), Math.ceil(downvotesadd), score, status)
            }
            
        }
        
        console.log(scoreInfo);
        
    return scoreInfo;
    
    
}

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote'); // [127, 127, 0, 'controversial']
var answer = solution.call(forumPost, 'score');
console.log(answer);

