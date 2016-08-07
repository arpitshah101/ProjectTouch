//
//  ViewController.swift
//  ProjectTouchiOS
//
//  Created by Qasim Abbas on 8/6/16.
//  Copyright © 2016 Qasim Abbas. All rights reserved.
//

import UIKit



class ViewController: UIViewController, UICollectionViewDelegate, UICollectionViewDataSource {
    var sampleData : [String] = ["1", "2", "3"]
    private let reuseIdentifier = "sampleCell"
    
    @IBOutlet weak var slideBar: UISlider!
    
    @IBOutlet weak var compCollection: UICollectionView!

    @IBAction func changeValue(sender: AnyObject) {
        
//        let size = CGSize(width: 50, height: 50)
//
//        let index :NSIndexPath = NSIndexPath(index: 0)
//        
//        print(index)
//        let cell = compCollection.cellForItemAtIndexPath(index)
//        print(cell)
//        
//        cell!.frame = CGRectMake(300, 300, 300, 300)
        
        
        
        
        //compCollection.reloadData()
        
        
//        
//        let indexPath = compCollection.indexPathForCell(<#T##cell: UICollectionViewCell##UICollectionViewCell#>)
////
//        
//        
//        var cell = compCollection.cellForItemAtIndexPath(<#T##indexPath: NSIndexPath##NSIndexPath#>)
//        compCollection.cellForItemAtIndexPath(indexPath!)?.sizeThatFits(size)
        
    //   print(indexPath?.row)
        let itemToSelectOne :NSIndexPath = NSIndexPath(forItem: 0, inSection: 0)
        let itemToSelectTwo :NSIndexPath = NSIndexPath(forItem: 1, inSection: 0)
        let itemToSelectThree :NSIndexPath = NSIndexPath(forItem: 2, inSection: 0)
        
        
        if(0 < slideBar.value && slideBar.value < (1/3)){
                self.collectionView(compCollection, didSelectItemAtIndexPath: itemToSelectOne)
                self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectTwo)
              self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectThree)
                print("BETWEEN 0 AND 0.33")
            
            if(slideBar.value == 1/6){
                self.performSegueWithIdentifier("nextSegue", sender: nil)
            }
            
            
        }else if((1/3) <= slideBar.value && slideBar.value <= (2/3) ){
          //    compCollection.selectItemAtIndexPath(indexPaths[1] as! NSIndexPath, animated: true, scrollPosition: UICollectionViewScrollPosition.None)
                self.collectionView(compCollection, didSelectItemAtIndexPath: itemToSelectTwo)
                  self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectOne)
            self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectThree)
                    print("BETWEEN 0.33 AND 0.66")
            
            if(slideBar.value == 1/2){
                self.performSegueWithIdentifier("nextSegue", sender: nil)
            }
            
            
        }else if((2/3) < slideBar.value && slideBar.value <= 1){
          //    compCollection.selectItemAtIndexPath(indexPaths[2] as! NSIndexPath , animated: true, scrollPosition: UICollectionViewScrollPosition.None)
                self.collectionView(compCollection, didSelectItemAtIndexPath: itemToSelectThree)
              self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectOne)
              self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectTwo)
                    print("ABOVE 0.66")
            
            if(slideBar.value == 5/6){
                self.performSegueWithIdentifier("nextSegue", sender: nil)
            }
            
            
        }else{
            self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectOne)
            self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectTwo)
            self.collectionView(compCollection, didDeselectItemAtIndexPath:itemToSelectThree)
        }
        
        
        
        print(slideBar.value)
    }
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.

        slideBar.continuous = true
        
        print(slideBar.value)
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    //1
    func numberOfSectionsInCollectionView(collectionView: UICollectionView) -> Int {
        return 1
    }
    
    //2
    func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return sampleData.count
    }
    
    //3
    func collectionView(collectionView: UICollectionView, cellForItemAtIndexPath indexPath: NSIndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCellWithReuseIdentifier(reuseIdentifier, forIndexPath: indexPath) 
        cell.backgroundColor = UIColor.redColor()

        // Configure the cell
        return cell
    }
    
    func collectionView(collectionView: UICollectionView, didSelectItemAtIndexPath indexPath: NSIndexPath) {
        let cell = compCollection.cellForItemAtIndexPath(indexPath)
        
        print("DID SELECT")
        
        
        cell?.frame = CGRectMake(((cell?.frame.origin.x)!), ((cell?.frame.origin.y)!), 300,300)
        
        
    }
    
    func collectionView(collectionView: UICollectionView, didDeselectItemAtIndexPath indexPath: NSIndexPath) {
        let cell = compCollection.cellForItemAtIndexPath(indexPath)
        
        cell?.frame = CGRectMake(((cell?.frame.origin.x )!) , ((cell?.frame.origin.y)!), 200,200)
    }
    
//    func collectionView(collectionView: UICollectionView, didSelectItemAtIndexPath indexPath: NSIndexPath) {
//        let cell = collectionView.dequeueReusableCellWithReuseIdentifier(reuseIdentifier, forIndexPath: indexPath)
//
//        cell.frame = CGRectMake(300, 300, 400, 400)
//        
//    }
    
//    func collectionView(collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAtIndexPath indexPath: NSIndexPath) -> CGSize {
//        //Return the size of each cell to draw
//        var cellSize: CGSize = CGSize()
//        cellSize.width = 320
//        let convFloat = CGFloat(slideBar.value)
//        cellSize.height = convFloat
//        return cellSize
//    }

}

