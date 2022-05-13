import {Component, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() jsonKeyboard = require("src/assets/desc-json/keyboard.json");

  firstPanelOpenState = false;
  secondPanelOpenState = false;
  thirdPanelOpenState = false;

  constructor(private translate: TranslateService) {
    this.translate.setTranslation('pl', this.jsonKeyboard, true);
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


  allCode = "@Data\n" +
    "public class KeyboardModule extends JPanel implements ActionListener {\n" +
    "\n" +
    "    private Integer Value=0;\n" +
    "    private int[] NumbList = {0,1,2,3,4,5,6,7,8,9};\n" +
    "    JButton NumbOne, NumbTwo, NumbThree, NumbFour, NumbFive, NumbSix, NumbSeven, NumbEight, NumbNine, NumbZero, EnterButton, BackspaceButton;\n" +
    "    private Logger log = Logger.getLogger(\"KeyboardModule\");\n" +
    "    private boolean Enter = false;\n" +
    "    private Color color = Color.WHITE;\n" +
    "\n" +
    "\n" +
    "    public void AddToValue(int numb) {\n" +
    "        int NewValue = getValue();\n" +
    "        NewValue = NewValue*10+numb;\n" +
    "        setValue(NewValue);\n" +
    "    }\n" +
    "\n" +
    "    public synchronized void setEntered() {\n" +
    "        this.Enter = true;\n" +
    "    }\n" +
    "\n" +
    "    public void resetEntered() {\n" +
    "        this.Enter = false;\n" +
    "    }\n" +
    "\n" +
    "    public void ValueReset() {\n" +
    "        setValue(0);\n" +
    "    }\n" +
    "\n" +
    "    public void BackSpaceMethod() {\n" +
    "        this.Value = this.Value/10;\n" +
    "    }\n" +
    "\n" +
    "    public void setBackgroundColor(Color cl) {\n" +
    "        this.color = cl;\n" +
    "    }\n" +
    "\n" +
    "    public KeyboardModule (ActionListener al) {\n" +
    "        setBackground(color);\n" +
    "        FormLayout layout = new FormLayout(\n" +
    "                \" 40dlu, 40dlu, 40dlu, 6dlu, 40dlu\",\n" +
    "                \" 10dlu, 10dlu, 10dlu, 10dlu\");\n" +
    "        CellConstraints cc = new CellConstraints();\n" +
    "        this.setLayout(layout);\n" +
    "\n" +
    "        EnterButton = new JButton(\"Enter\");\n" +
    "        EnterButton.addActionListener(al);\n" +
    "        EnterButton.addActionListener(this);\n" +
    "        this.add(EnterButton, cc.xy (5,3,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "\n" +
    "        BackspaceButton = new JButton(\"Back\");\n" +
    "        BackspaceButton.addActionListener(this);\n" +
    "        BackspaceButton.addActionListener(al);\n" +
    "        this.add(BackspaceButton, cc.xy (5,1,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "\n" +
    "        NumbOne = new JButton(\"1\");\n" +
    "        NumbOne.addActionListener(this);\n" +
    "        NumbOne.addActionListener(al);\n" +
    "        this.add(NumbOne, cc.xy (1,1,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "        NumbTwo = new JButton(\"2\");\n" +
    "        NumbTwo.addActionListener(al);\n" +
    "        NumbTwo.addActionListener(this);\n" +
    "        this.add(NumbTwo, cc.xy (2,1,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "        NumbThree = new JButton(\"3\");\n" +
    "        NumbThree.addActionListener(al);\n" +
    "        NumbThree.addActionListener(this);\n" +
    "        this.add(NumbThree, cc.xy (3,1,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "\n" +
    "        NumbFour = new JButton(\"4\");\n" +
    "        NumbFour.addActionListener(this);\n" +
    "        NumbFour.addActionListener(al);\n" +
    "        this.add(NumbFour, cc.xy (1,2,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "        NumbFive = new JButton(\"5\");\n" +
    "        NumbFive.addActionListener(this);\n" +
    "        NumbFive.addActionListener(al);\n" +
    "        this.add(NumbFive, cc.xy (2,2,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "        NumbSix = new JButton(\"6\");\n" +
    "        NumbSix.addActionListener(this);\n" +
    "        NumbSix.addActionListener(al);\n" +
    "        this.add(NumbSix, cc.xy (3,2,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "\n" +
    "        NumbSeven = new JButton(\"7\");\n" +
    "        NumbSeven.addActionListener(this);\n" +
    "        NumbSeven.addActionListener(al);\n" +
    "        this.add(NumbSeven, cc.xy (1,3,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "        NumbEight = new JButton(\"8\");\n" +
    "        NumbEight.addActionListener(this);\n" +
    "        NumbEight.addActionListener(al);\n" +
    "        this.add(NumbEight, cc.xy (2,3,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "        NumbNine = new JButton(\"9\");\n" +
    "        NumbNine.addActionListener(this);\n" +
    "        NumbNine.addActionListener(al);\n" +
    "        this.add(NumbNine, cc.xy (3,3,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "\n" +
    "        NumbZero = new JButton(\"0\");\n" +
    "        NumbZero.addActionListener(this);\n" +
    "        NumbZero.addActionListener(al);\n" +
    "        this.add(NumbZero, cc.xy (2,4,CellConstraints.FILL, CellConstraints.FILL));\n" +
    "\n" +
    "        this.setVisible(true);\n" +
    "    }\n" +
    "\n" +
    "    @Override\n" +
    "    public void actionPerformed(ActionEvent e) {\n" +
    "        if(e.getSource()==NumbZero) {\n" +
    "            AddToValue(NumbList[0]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbOne) {\n" +
    "            AddToValue(NumbList[1]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbTwo) {\n" +
    "            AddToValue(NumbList[2]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbThree) {\n" +
    "            AddToValue(NumbList[3]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbFour) {\n" +
    "            AddToValue(NumbList[4]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbFive) {\n" +
    "            AddToValue(NumbList[5]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbSix) {\n" +
    "            AddToValue(NumbList[6]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbSeven) {\n" +
    "            AddToValue(NumbList[7]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbEight) {\n" +
    "            AddToValue(NumbList[8]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==NumbNine) {\n" +
    "            AddToValue(NumbList[9]);\n" +
    "            resetEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==EnterButton) {\n" +
    "            log.info(getValue().toString());\n" +
    "            setEntered();\n" +
    "        }\n" +
    "        if(e.getSource()==BackspaceButton) {\n" +
    "            BackSpaceMethod();\n" +
    "            log.info(getValue().toString());\n" +
    "        }\n" +
    "    }\n" +
    "}\n"

  addToValue = "    public void AddToValue(int numb) {\n" +
    "        int NewValue = getValue();\n" +
    "        NewValue = NewValue * 10 + numb;\n" +
    "        setValue(NewValue);\n" +
    "    }\n" +
    "\n" +
    "    public void ValueReset() {\n" +
    "        setValue(0);\n" +
    "    }"

  returnMethod = "    public void BackSpaceMethod() {\n" +
    "        this.Value = this.Value / 10;\n" +
    "    }"
  setbgcolor = "    public void setBackgroundColor(Color cl) {\n" +
    "        this.color = cl;\n" +
    "    }"

}
