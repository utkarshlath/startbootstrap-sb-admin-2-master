package com.example.startbootstrapsbadmin2master.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TestController {



        @RequestMapping(value = "/index.html")
        public String hello() {
            return "index";
        }
    @RequestMapping(value = "/tables.html")
    public String tables() {
        return "tables";
    }
    @RequestMapping(value = "/charts.html")
    public String charts(Model model)
    {
        model.addAttribute("text","controllertest");
        //obj.sav(input);
        return "charts";

    }
}
