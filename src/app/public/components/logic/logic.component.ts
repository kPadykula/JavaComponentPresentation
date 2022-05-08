import {Component, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {

  @Output() jsonLogic = require("src/assets/desc-json/logic.json");

  code = "import lombok.Getter;\n" +
    "import lombok.Setter;\n" +
    "\n" +
    "public class Square implements IOperation {\n" +
    "\n" +
    "    @Getter\n" +
    "    @Setter\n" +
    "    private double a;\n" +
    "\n" +
    "    private double circumference, area;\n" +
    "\n" +
    "    public Square(double a){\n" +
    "        this.a = a;\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * Method which calculate circumference of square\n" +
    "     * @return value of circumference if a exists otherwise return 0.\n" +
    "     */\n" +
    "    @Override\n" +
    "    public double Circumference() {\n" +
    "        if (a != 0){\n" +
    "            circumference = 4 * a;\n" +
    "            return circumference;\n" +
    "        }else\n" +
    "            return 0;\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * Method which calculate area of square\n" +
    "     * @return value of area if a exists otherwise return 0.\n" +
    "     */\n" +
    "    @Override\n" +
    "    public double Area() {\n" +
    "        if (a != 0){\n" +
    "            area = Math.pow(a,2);\n" +
    "            return area;\n" +
    "        }\n" +
    "        else\n" +
    "            return 0;\n" +
    "    }\n" +
    "}\n";

  constructor(private translate: TranslateService) {
    this.translate.setTranslation('pl', this.jsonLogic, true);
  }

  ngOnInit(): void {

  }
}
