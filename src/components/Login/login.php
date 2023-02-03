<?php

    session_start();//pozwala na korzystanie z sesji- pudełko na zmienne

    // Jeśli w globalnej tablicy POST nie jest ustawiona zmienna o nazwie login lub password...
    if((!isset($_POST['login'])) || (!isset($_POST['password']))) {
        header('Location: login');//...przekieruj do index.php
        exit();
    }

    require_once "rafaelo_messages.php";

    $con = @new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);// otwarcie połączenia
    
    //spr czy połączenie = true (jeśli nie, echo ERROR)
    if ($con->connect_errno!=0) {
        echo "Error: " . $con->connect_errno;// errno- kod błędu
         //. "Opis: ". $con->connect_error; (opis błędu)
    } else {
        $login = $_POST['login'];
        $password = $_POST['password'];  

        //htmlentities- uniemożliwienie wstawienia znaków funkcyjnych (encje)
        //ENT_QUOTES- zamienia na encje także apostrofy i cudzysłowie
        $login = htmlentities($login, ENT_QUOTES, "UTF-8");
        $password = htmlentities($password, ENT_QUOTES, "UTF-8");

        //wysłanie zapytania sql do sql. Jeśli zapytanie nie może zostać wykonane (np literówka), rezultat=false i if się nie spełni
        if($effect = @$con->query(

            //sprintf w miejscu gdzie jest pierwszy %s, wstawi pierwszy argument po przecinku, a zamiast drugiego %s wstawi drugi argument po przecinku
            //%- oznaczenie miejsca na zmienną, s- zmienna typu string
            sprintf("SELECT * FROM uzytkownicy WHERE user ='%s' AND pass='%s'",
            mysqli_real_escape_string($con,$login),
            mysqli_real_escape_string($con,$password)
            /* mysqli_real_escape_string to specjalnie napisana funkcja zapobiegająca wpływaniu na zapytania operatorami -- lub ''. Posiada 2 argumenty. identyfikator połączenia i ciąg znaków, który chcemy poddać sanityzacji */
        ))) {
            $how_many_users = $effect->num_rows;
            if($how_many_users>0) {
                $_SESSION['logged'] = true;

                $row = $effect->fetch_assoc();//wszystkie informacje z wiersza w sql
                $_SESSION['id'] = $row['id'];   

                unset($_SESSION['blad']);//W przypadku zalogowania usuń zmienna SESSION['blad']

                $effect->free_result();//usunięcie z pamięci zbędnych rezultatów

                header('Location: mess'); //Przekierowanie w przypadku powodzenia 
            } else { // gdy hasło lub login są nieprawidłowe
                $_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło</span>';
                header('Location: index.php'); //Przekierowanie w przypadku niepowodzenia
            }
        };

        $con->close(); // zamknięcie połączenia po otrzymaniu oczekiwanego rezultatu
    }

?>