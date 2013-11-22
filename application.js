// Custom application code here

function OahuInitCallback() {
  Oahu.app.registration_fields = [
    { name : "name", type : "text", label : "Nom", required: true,  error : "Veuillez saisir votre nom" },
    { name : "email", type : "text", label : "Email", required: true, error : "Veuillez saisir votre email" },
    { name : "ville", type : "text", label : "Ville", required: true, error : "Veuillez saisir votre ville" },
  ];  
}

Oahu.Apps.extend('quiz','my_quiz',{
  namespace: "my_quiz",

  share_hash:{
    method        : 'feed',
    name          : 'Game Name',                          //Titre de la boite de partage
    caption       : 'Quiz de démo Oahu',                  //Sous-titre de la boite de partage
    link          : 'https://www.facebook.com/GAME_LINK', //lien de redirection de la boite de partage 
    description   : 'Game Description',                   //Description de la boite de partage
    picture       : 'http://hull.io/images/features/mission.png',                       //Vignette de la boite de partage
    tweet         : 'Twitter content',                    //Tweet
    delay         : 5000                                  //Delai en ms avant d'ouvrir la boite de partage a la fin du jeu.
  },

  templates: ["quiz", "quiz_answer", "quiz_description", "quiz_entries", "quiz_entry", "quiz_footer", "quiz_header", "quiz_shares", "quiz_intro", "quiz_intro_message_logged_in", "quiz_intro_message_logged_out", "quiz_pagination", "quiz_resource", "quiz_submitted", "quiz_finished", "quiz_profile"],

  initialize: function() {
    _.bindAll(this);
    Oahu.Apps.Quiz.prototype.initialize.apply(this,arguments);
  },

  onaftersubmit : function() {
    var _this = this;
    setTimeout(function(quiz){
      Oahu.ui.share('facebook', {
            link: _this.share_hash.link,
            name: "Je viens d'avoir "+_this.currentScore+"/20 Au quiz "+_this.share_hash.name,
            caption: _this.share_hash.caption,
            description: _this.share_hash.description,
            picture : _this.share_hash.picture,
          }, function(res){
            Oahu.track("quiz", "share", _this.id, {provider: 'facebook'});
          });
    },_this.share_hash.delay,this);
    Oahu.Apps.Quiz.prototype.onaftersubmit.apply(this,arguments);
  },

  share: function(target, event, options) {
    var _this = this;
    var provider = $(target).attr('data-oahu-provider');

    var post_tweet = function(res){
      Oahu.track("quiz", "share", _this.id, {provider: provider});
    }

    if(provider=='facebook'){
      Oahu.ui.share('facebook', {
        link: _this.share_hash.link,
        name: "Je viens d'avoir "+_this.currentScore+"/20 Au quiz "+_this.share_hash.name,
        caption: _this.share_hash.caption,
        description: _this.share_hash.description,
        picture : _this.share_hash.picture,
      }, post_tweet);
    }else{
      Oahu.ui.share('twitter', {
        content: _this.share_hash.tweet,
      }, post_tweet);
    }
  },
});
