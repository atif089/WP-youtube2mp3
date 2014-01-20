jQuery.noConflict();
(function($) {
	$(function() {

		window.yt2mp3 = function(url, $container) {
			/*
				Parse Youtube URLs
				http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url#answer-8260383
				
				These are the types of URLs supported
				http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
				http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o
				http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
				http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
				http://www.youtube.com/embed/0zM3nApSvMg?rel=0
				http://www.youtube.com/watch?v=0zM3nApSvMg
				http://youtu.be/0zM3nApSvMg
			*/
			this.parseURL = function(url){
				var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
				var match = url.match(regExp);
				if (match&&match[7].length==11){
					this.videoID = match[7];
					return match[7];
				} else {
					return false;
				}
			}
			
			/*
				ping the API to start conversion process. Takes 5 - 30 seconds
			*/
			this.pingAPI = function(videoID) {		
				var _this. = this;		
				url : window.location.href.split('youtubeMP3.js')[0] + videoID,
				method : 'get',
				dataType: 'json',
				success : function(data) {
					_this.activateDownloadBtn(data);
				}
			}

			/*
				activate the button with sign
			*/
			this._activateDownloadBtn = function(data) {
				link = _this.downloadBtn.find('a');
				link.text('Download MP3');
				link.removeClass('disabled');
				link.attr('href', data.downloadURL);	
			}
				
			/*
				create a download button and attach to $container
			*/
			this.createButton = function($container) {
				this.downloadBtn = $('<br/><br/><p><a href="#" class="yt2mp3 disabled">Preparing MP3 for Download</a> Link will be ready for download in 10-60 seconds in most cases.</p>');
				this.downloadBtn.appendTo($container);
				return this.downloadBtn;
			}


			/*
				initialize
			*/
			if(this.parseURL(url)) {
				this.createButton($container);
				this.pingAPI(this.videoID);	
			}
		}

	});
})(jQuery);