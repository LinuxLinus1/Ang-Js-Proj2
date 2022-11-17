var app=angular.module("MyApp",[]);

app.controller("MyController", function ($scope) {
$scope.img = "./images/home icon.png";
  $scope.imgStyle = {
    width: "30px",
    Cursor: "pointer",
  };
  $scope.bodyObj = {
    padding:0,
    margin:0,
    backgroundColor: '#eef'
  };
  $scope.div = {
    display: "flex",
    paddingBlock: "18px",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  };
  $scope.links = ["Home", "About", "Services", "Contact", "Login"];
  $scope.td = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontSize:"1.2em",
    Cursor: "pointer"
  };
  $scope.save = function ($this) {
    if ($this.form1.email.$error.required) {
        $scope.errorMsg = "This field is required";
    }
    else if ($this.form1.$invalid) {
        $scope.errorMsg = "Email is not valid";
    }
    else {
        $scope.errorMsg = "";
        alert("The given Email is accepted.");
    }
}  
});