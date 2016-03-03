function VoteController() {
  var vm = this;
    vm.votes = 0;
    vm.hasVoted = false;
    vm.hasRemovedVote = false;

    this.incrementVotes = function () {
      if(!vm.hasVoted){
        vm.votes++;
        vm.hasVoted = true;
      }
      else if (vm.hasVoted && vm.hasRemovedVote){
        vm.votes++;
        vm.hasRemovedVote = false;
      }
    };

    this.decrementVotes = function () {
      if (vm.votes && vm.hasVoted && !vm.hasRemovedVote){
        vm.votes--;
        vm.hasRemovedVote = true;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);