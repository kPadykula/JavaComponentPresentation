import {Component, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Output() jsonDisplay = require("src/assets/desc-json/display.json");
  firstPanelOpenState = false;
  secondPanelOpenState = false;
  thirdPanelOpenState = false;
  fourthPanelOpenState = false;

  constructor(private translate: TranslateService) {
    this.translate.setTranslation('pl', this.jsonDisplay, true);
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


  fulljavaCode = 'public class Display extends JPanel implements ActionListener{\n' +
    '    private static final String[] TWO_DIM = new String[]{"Circle", "Triangle", "Square", "Rectangle"};\n' +
    '    private static final String[] THREE_DIM = new String[]{"Sphere", "Cuboid", "Cone", "Pyramid"};\n' +
    '    private static final ComboBoxModel<String> TWO_DIM_MODEL = new DefaultComboBoxModel<>(TWO_DIM);\n' +
    '    private static final ComboBoxModel<String> THREE_DIM_MODEL = new DefaultComboBoxModel<>(THREE_DIM);\n' +
    '    private final JComboBox<String> shapes;\n' +
    '    private JTextArea display;\n' +
    '    private JButton twoDim, threeDim;\n' +
    '\n' +
    '    public Display() {\n' +
    '        this.shapes = new JComboBox(TWO_DIM);\n' +
    '        this.display = new JTextArea();\n' +
    '        this.setLayout(new GridLayout(3, 1));\n' +
    '        this.add(this.shapes);\n' +
    '\n' +
    '        this.display.setEditable(false);\n' +
    '        this.display.setBorder(BorderFactory.createLineBorder(Color.BLACK));\n' +
    '        this.display.setFont(new Font("Serif", 0, 20));\n' +
    '        this.add(this.display);\n' +
    '\n' +
    '        addButtons();\n' +
    '\n' +
    '        this.setBorder(BorderFactory.createTitledBorder("Calc"));\n' +
    '    }\n' +
    '\n' +
    '    private void addButtons() {\n' +
    '        JPanel panel = new JPanel();\n' +
    '        panel.setLayout(new GridLayout(1, 2));\n' +
    '        this.twoDim = new JButton("Flat");\n' +
    '        this.threeDim = new JButton("Dimensional");\n' +
    '        this.twoDim.setBackground(Color.GREEN);\n' +
    '        this.threeDim.setBackground(Color.LIGHT_GRAY);\n' +
    '\n' +
    '        this.threeDim.addActionListener(this);\n' +
    '        this.twoDim.addActionListener(this);\n' +
    '\n' +
    '        panel.add(twoDim);\n' +
    '        panel.add(threeDim);\n' +
    '        this.add(panel);\n' +
    '    }\n' +
    '\n' +
    '    public void setComputeButtonListener(ActionListener actionListener) {\n' +
    '        this.shapes.addActionListener(actionListener);\n' +
    '    }\n' +
    '\n' +
    '    public void setText(String text) {\n' +
    '        this.display.setText(text);\n' +
    '    }\n' +
    '\n' +
    '    public String getText() {\n' +
    '        return this.display.getText();\n' +
    '    }\n' +
    '\n' +
    '    public String getChosenShape() {\n' +
    '        return (String)this.shapes.getSelectedItem();\n' +
    '    }\n' +
    '\n' +
    '    @Override\n' +
    '    public void actionPerformed(ActionEvent actionEvent) {\n' +
    '        JButton button = (JButton) actionEvent.getSource();\n' +
    '        if (button == this.twoDim) {\n' +
    '            this.shapes.setModel(TWO_DIM_MODEL);\n' +
    '            this.twoDim.setBackground(Color.GREEN);\n' +
    '            this.threeDim.setBackground(Color.LIGHT_GRAY);\n' +
    '            this.revalidate();\n' +
    '        }\n' +
    '        else if (button == this.threeDim) {\n' +
    '            this.shapes.setModel(THREE_DIM_MODEL);\n' +
    '            this.twoDim.setBackground(Color.LIGHT_GRAY);\n' +
    '            this.threeDim.setBackground(Color.GREEN);\n' +
    '            this.revalidate();\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    public JComboBox<String> getShapes() {\n' +
    '        return shapes;\n' +
    '    }\n' +
    '\n' +
    '    public JTextArea getDisplay() {\n' +
    '        return display;\n' +
    '    }\n' +
    '\n' +
    '    public void setDisplay(JTextArea display) {\n' +
    '        this.display = display;\n' +
    '    }\n' +
    '\n' +
    '    public JButton getTwoDim() {\n' +
    '        return twoDim;\n' +
    '    }\n' +
    '\n' +
    '    public void setTwoDim(JButton twoDim) {\n' +
    '        this.twoDim = twoDim;\n' +
    '    }\n' +
    '\n' +
    '    public JButton getThreeDim() {\n' +
    '        return threeDim;\n' +
    '    }\n' +
    '\n' +
    '    public void setThreeDim(JButton threeDim) {\n' +
    '        this.threeDim = threeDim;\n' +
    '    }\n' +
    '\n' +
    '}\n'


    settextCode = '    public void setComputeButtonListener(ActionListener actionListener) {\n' +
      '        this.shapes.addActionListener(actionListener);\n' +
      '    }\n' +
      '\n' +
      '    public void setText(String text) {\n' +
      '        this.display.setText(text);\n' +
      '    }\n' +
      '\n' +
      '    public String getChosenShape() {\n' +
      '        return (String)this.shapes.getSelectedItem();\n' +
      '    }'

    actionListener = '    public void actionPerformed(ActionEvent actionEvent) {\n' +
      '        JButton button = (JButton) actionEvent.getSource();\n' +
      '        if (button == this.twoDim) {\n' +
      '            this.shapes.setModel(TWO_DIM_MODEL);\n' +
      '            this.twoDim.setBackground(Color.GREEN);\n' +
      '            this.threeDim.setBackground(Color.LIGHT_GRAY);\n' +
      '            this.revalidate();\n' +
      '        }\n' +
      '        else if (button == this.threeDim) {\n' +
      '            this.shapes.setModel(THREE_DIM_MODEL);\n' +
      '            this.twoDim.setBackground(Color.LIGHT_GRAY);\n' +
      '            this.threeDim.setBackground(Color.GREEN);\n' +
      '            this.revalidate();\n' +
      '        }\n' +
      '    }'
}
