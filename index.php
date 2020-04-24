<?php
include('Controller/indexController.php');

$route = new Route();

class Route{


    private $routes;
    
    public function __construct(){
        $this->initRoutes();
        $this->run($this->getURL());
    }

    public function initRoutes()
    {
        $this->routes['/'] = array('controller' => 'indexController', 'action' => 'index');

    }

    public function getURL()
    {
        // parse_url para site
        $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        //parse_url para localhost
        $url = substr($url, 11, 1000);  // 11 letras = seaman/www
        return $url;
        
    }

    public function run($url)
    {
        if(array_key_exists($url, $this->routes))
        {
            $class ="\\Controller\\" . $this->routes[$url]['controller'];
            $controller = new $class();
            $action = $this->routes[$url]['action'];
            $controller->$action();
        }
        else{
            
        }
            
    }
    
}