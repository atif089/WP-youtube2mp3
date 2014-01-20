<?php

/**
 * Plugin Name: Youtube to MP3 Download
 * Description: This plugin take the Youtube video URL, converts the video into MP3 and returns a download link using external APIs.
 * Version: 1.0
 * Author: Mohammed Ameenuddin Atif (atif089 at famous email services starting with G)
 * Author URI: http://www.netgrandpa.com
 * License: Public
 */

function yt_add_download_link_to_post() {
    if (is_single()) {
        wp_enqueue_script('youtubemp3', WP_PLUGIN_URL . '/youtube-mp3-download' . '/youtubeMP3.js', array('jquery'), false, true);            
        wp_enqueue_style('youtubemp3CSS', WP_PLUGIN_URL . '/youtube-mp3-download' . '/youtubeMP3.css', false, true);
    }
}
add_action('template_redirect', 'yt_add_download_link_to_post');