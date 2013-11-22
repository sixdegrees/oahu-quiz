<?php require_once('config.php'); ?>
<html>
<head>
  <title>Oahu Quiz</title>
    <meta charset="utf-8">
    <script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
    <script type="text/javascript" src="//app-staging.oahu.fr/assets/oahu.js"></script>
    <script type="text/javascript" src="//app-staging.oahu.fr/assets/oahu-apps.js"></script>
    <script type="text/javascript" src="./application.js"></script>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" />
    <link rel="stylesheet" type="text/css" href="./application.css">
    <script type="text/javascript">
      $(function() {
        Oahu.init({ appId: '<?php echo OAHU_APP_ID ?>' }, OahuInitCallback);
      });
    </script>
  </head>
</head>
<body>

  <div class="container">
    <div data-oahu-widget="quiz" 
        data-oahu-id="<?php echo OAHU_QUIZ_ID ?>" 
        data-oahu-on='{ "registration:register" : "submit" }'>
    </div>
  </div>

  <?php echo Oahu_Helpers::includeTemplates('templates'); ?>

</body>
</html>