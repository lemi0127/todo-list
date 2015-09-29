ToDo.controller('TodoHomeCtrl',['$scope', '$localStorage', function($scope,$localStorage) {
    $scope.todos = {
        text: ' '
    };

    if($localStorage.todos){
        $scope.todos = $localStorage.todos;
    } else {
        $scope.todos = [
        {text:"Task 1", done: false},
        {text:"Task 2", done: false},
        {text:"Task 3", done: false}
                        ]
    }
    
    $scope.addTodo = function () {
        $scope.todos.push({
            'text': $scope.todoText,
            'done': false
        });
        $localStorage.todos = $scope.todos;
        $scope.todoText = '';
    }
    
   $scope.clear = function (index) {
        delete $scope.todos[index];
        $localStorage.todos = $scope.todos;
    }
    
}]);