<?php

// <script></script>

$conn = mysqli_connect("localhost", "myroot", "92653056seif@&%", "my_server_data");
$req = "SELECT * FROM compts";
$que =  mysqli_query($conn, $req);
function registercompt($connF, $queF) {
    if ($connF) {
        echo "start";
        $prenom = $_POST["prenom"];
        $nom = $_POST["nom"];
        $username = $_POST["username"];
        $id = $_POST["id"];
        $email = $_POST["email"];
        $number = $_POST["phonenumber"];
        $date = $_POST["date"];
        $password = $_POST["password"];
        // $data=[
        //     'nom' => $nom,
        //     'prenom' => $prenom,
        //     'username' => $username,
        //     'id' => $id,
        //     'email' => $email,
        //     'number' => $number,
        //     'date' => $date,
        //     'password' => $password,
        // ];
        // $json= json_encode($data);
        // $sql = "INSERT INTO json (json_data) VALUES (?)";
        // $stmt = mysqli_prepare($connF, $sql);
        // mysqli_stmt_bind_param($stmt, "s", $json);
        // mysqli_stmt_execute($stmt);
        // mysqli_stmt_close($stmt);
        // $sel = "SELECT json_data FROM json";
        // $res = mysqli_query($connF,$sel);
        // $datap = json_encode($res);
        // echo $datap;



        $T_F = false;
        $a = 0;
        while ($fetch = mysqli_fetch_object($queF)) {
            if ($fetch->username == $username) {
                echo "username error\n";
                $T_F = true;
                break;
            }elseif($fetch->id == $id){
                echo "id error\n";
                $T_F = true;
                break;
            }
            else{
                echo "pass\n";
                $T_F = false;
            };
            
            
        };
        if ($T_F == false) {
            mysqli_query($connF, "INSERT INTO compts (nom ,prenom , username ,id,email,number,date,password) VALUES('$nom','$prenom','$username','$id','$email','$number','$date','$password')");
            echo "finch";

        };
        
    }
};
registercompt($conn, $que);



?>
