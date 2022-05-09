import {Component, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {

  @Output() jsonLogic = require("src/assets/desc-json/logic.json");

  codeSquare = "import lombok.Getter;\n" +
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

  codeInf1 = "public interface IOperation {\n" +
    "    /**\n" +
    "     * Obwód\n" +
    "     */\n" +
    "    double Circumference();\n" +
    "\n" +
    "    /**\n" +
    "     * Pole\n" +
    "     */\n" +
    "    double Area();\n" +
    "}\n"

  codeCone = "import lombok.Getter;\n" +
    "import lombok.Setter;\n" +
    "\n" +
    "public class Cone implements IOperationThreeDimensional {\n" +
    "\n" +
    "    private static final double PI = 3.14159;\n" +
    "\n" +
    "    @Setter\n" +
    "    @Getter\n" +
    "    private double r, h, l, Pb, Pp;\n" +
    "\n" +
    "    public Cone(double r, double h) {\n" +
    "        this.r = r;\n" +
    "        this.h = h;\n" +
    "        this.l = Math.sqrt( Math.pow(h, 2) + Math.pow(r, 2));\n" +
    "        this.Pp = PI * Math.pow(r, 2);\n" +
    "        this.Pb = PI * this.r * l;\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * Method is eliminate in this class\n" +
    "     * @return return 0.\n" +
    "     */\n" +
    "    @Override\n" +
    "    public double Circumference() {\n" +
    "        return 0;\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * Method which calculate area of Cone\n" +
    "     * @return value of area if (r & h) > 0 otherwise return 0.\n" +
    "     */\n" +
    "    @Override\n" +
    "    public double Area() {\n" +
    "        if (r > 0 && h > 0){\n" +
    "            return Pp + Pb;\n" +
    "        } else\n" +
    "            return 0;\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * Method which calculate volume of Cone\n" +
    "     * @return value of volume if (r & h) > 0 otherwise return 0.\n" +
    "     */\n" +
    "    @Override\n" +
    "    public double Volume() {\n" +
    "        if (r > 0 && h > 0){\n" +
    "            return (Pp * h) / 3;\n" +
    "        } else\n" +
    "            return 0;\n" +
    "    }\n" +
    "}\n"

    codeInf2 = 'public interface IOperationThreeDimensional extends IOperation {\n' +
    '    /**\n' +
    '     * Objętość\n' +
    '     */\n' +
    '    double Volume();\n' +
    '}\n'

  firstPanelOpenState = false;
  secondPanelOpenState = false;
  thirdPanelOpenState = false;

  constructor(private translate: TranslateService) {
    this.translate.setTranslation('pl', this.jsonLogic, true);
  }

  ngOnInit(): void {

  }

  goTop() {
    window.scroll({
      top:0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
