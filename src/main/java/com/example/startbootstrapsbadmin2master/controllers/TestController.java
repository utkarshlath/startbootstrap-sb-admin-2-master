package com.example.startbootstrapsbadmin2master.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class TestController {


  @RequestMapping(value = "/index.html")
  public String hello() {
      return "index";
    }
    @RequestMapping(value = "/register.html")
    public String register() {
        return "register";
      }
  @RequestMapping(value = "/tables.html")
  public String tables() {
        return "tables";
    }
  @RequestMapping(value = "/tables1.html")
  public String tables1() {
        return "tables1";
    }
  @RequestMapping(value = "/tables2.html")
  public String tables2() {
        return "tables2";
    }
  @RequestMapping(value = "/login.html")
  public String login() {
        return "login";
    }
  @RequestMapping(value = "/forgot-password.html")
  public String fp() {
        return "forgot-password";
    }
  @RequestMapping(value = "/charts.html")
  public String charts(Model model)
   {
       model.addAttribute("text","controllertest");
        //obj.sav(input);
        return "charts";

    }
}
