<?php
$code=$_REQUEST['code'];
$id=$_REQUEST['id'];
define("clientID",'cabcca192d7942b6a99aa9263ff479f0');
define("clientSecret",'bb560a7046c641c681a739e55216b533');
define("redirectURI",'http://instapix.pe/');
function connectToInstagram($url, $settings){
	$ch = curl_init();
	curl_setopt_array($ch, array(
	CURLOPT_URL => $url,
	CURLOPT_POSTFIELDS => $settings,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_SSL_VERIFYPEER => false,
	CURLOPT_SSL_VERIFYHOST => 2
	));
	$result = curl_exec($ch);
	curl_close($ch);
	return $result;
}
$url  = "https://api.instagram.com/oauth/access_token";
$access_token_settings = array(

	'client_id'     => clientID,
	'client_secret' => clientSecret,
	'grant_type'	=> 'authorization_code',
	'redirect_uri'	=>	redirectURI,
	'code'			=>	$code
);
$result=connectToInstagram($url, $access_token_settings);
$results=json_decode($result, true);
$at=$results['access_token'];
$ui=$results['user']['id'];
$fn=$results['user']['full_name'];
$pp=$results['user']['profile_picture'];
$link = mysql_connect("renato.instapix.pe:3306","renarux","screamer12");
mysql_select_db("instapix");
mysql_set_charset("utf8");
mysql_query("UPDATE Usuario SET tokenUsuario='$at', useridUsuario='$ui', usernomUsuario='$fn', profileUsuario='$pp' WHERE idUsuario='$id'");
mysql_close($link);
?>