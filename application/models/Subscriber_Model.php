<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Subscriber_Model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function create_subscriber() {

        $data = array(
            'mail_text' => $this->input->post('email_txt')
        );
        if ($this->db->insert('tbl_emails', $data)) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public function check_email_exist($user_email) {
        $query = $this->db->get_where('tbl_emails', array('mail_text' => $user_email));
        if (empty($query->row_array())) {
            return true;
        } else {
            return false;
        }
    }

}
