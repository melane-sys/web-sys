<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

    public function view() {
        $data['title'] = 'Melane-Sys';
        $this->load->view('includes/header',$data);
        $this->load->view('index',$data);
        $this->load->view('includes/footer');
    }


}
