app.component('main', {
    controller: function ($scope, $http) {
        $scope.options = {
            acceptFileTypes: /(\.|\/)(mp3|mp4)$/i,
            add: function (e, data) {
                console.log(e);
                data.submit();
            },
            done: function (e, data) {
                $scope.className = "wistia_embed wistia_async_" + data.result.hashed_id;
            },
            fail: function (e, data) {
                alert(data.result.error);
            },
            maxFileSize: 5000000,
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .bar').css(
                    'width',
                    progress + '%'
                );
            },
            type: "POST",
            url:'https://upload.wistia.com/?project_id=3o481oq5oe&api_password=4ec7a45fca60c9be33c23401c2ab966c30c5bd17e9d7c22bf6acd7d95ca9650c'
        }
    },

    templateUrl: "assets/templates/main.html"
});